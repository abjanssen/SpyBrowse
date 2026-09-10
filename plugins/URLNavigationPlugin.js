/* eslint-disable no-restricted-globals */
;(function () {
  class URLNavigationPlugin {
    name = 'URLNavigationPlugin'

    install(pluginManager) {
      /* do nothing */
    }

    configure(pluginManager) {
      const { when } = pluginManager.jbrequire('mobx')
      const { readConfObject } = pluginManager.jbrequire('@jbrowse/core/configuration',)
      const { SimpleFeature } = pluginManager.jbrequire('@jbrowse/core/util',)

      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
      const trixIndexCache = new Map()
      const resolveUri = (uri, baseUrl) => new URL(uri, baseUrl).href
      const getConfigUrl = () => {
        const pageUrl = new URL(window.location.href)
        const configParam = pageUrl.searchParams.get('config') || 'config.json'
        return resolveUri(configParam, pageUrl.href)
      }
      const getTrixIxUrl = async searchstrain => {
        const configUrl = getConfigUrl()
        const response = await fetch(configUrl)
        if (!response.ok) {
          throw new Error(
            `Could not load JBrowse config "${configUrl}": HTTP ${response.status}`,
          )
        }

        const config = await response.json()

        const track = config.tracks?.find(
          candidate =>
            candidate.assemblyNames?.includes(searchstrain) &&
            candidate.textSearching?.textSearchAdapter?.type ===
              'TrixTextSearchAdapter',
        )

        const perTrackUri =
          track?.textSearching?.textSearchAdapter?.ixFilePath?.uri ||
          track?.textSearching?.textSearchAdapter?.uri

        if (perTrackUri) {
          return resolveUri(perTrackUri, configUrl)
        }

        const aggregate = config.aggregateTextSearchAdapters?.find(
          candidate =>
            candidate.type === 'TrixTextSearchAdapter' &&
            candidate.assemblyNames?.includes(searchstrain),
        )

        const aggregateUri =
          aggregate?.ixFilePath?.uri || aggregate?.uri

        if (aggregateUri) {
          return resolveUri(aggregateUri, configUrl)
        }

        throw new Error(
          `No Trix text-search index configured for assembly "${searchstrain}"`,
        )
      }

      const loadTrixIndex = async ixUrl => {
        if (!trixIndexCache.has(ixUrl)) {
          trixIndexCache.set(
            ixUrl,
            fetch(ixUrl).then(async response => {
              if (!response.ok) {
                throw new Error(
                  `Could not load Trix index "${ixUrl}": HTTP ${response.status}`,
                )
              }

              return response.text()
            }),
          )
        }

        return trixIndexCache.get(ixUrl)
      }

      const trixKey = value => String(value).trim().toLowerCase()
      const normalizeKey = value =>
        trixKey(value).replace(/[^a-z0-9]/g, '')
      const stripPunctuationPreserveCase = value =>
        String(value).trim().replace(/[^a-zA-Z0-9]/g, '')

      const getTrackIdPrefix = resolvedStrain =>
        stripPunctuationPreserveCase(resolvedStrain)
      const findTrixLocation = async (query, searchstrain) => {
        const ixUrl = await getTrixIxUrl(searchstrain)
        const ixText = await loadTrixIndex(ixUrl)
        const wantedKey = trixKey(query)
        const wantedNormalizedKey = normalizeKey(query)

        const lines = ixText.split(/\r?\n/)

        // First, try an exact (case-insensitive) match against the stored key.
        let line = lines.find(candidate => {
          const separator = candidate.indexOf(' ')
          return (
            separator !== -1 &&
            candidate.slice(0, separator).toLowerCase() === wantedKey
          )
        })

        // Fall back to a punctuation-insensitive match, e.g. "495498"
        // matching a stored key of "4954-98".
        if (!line) {
          line = lines.find(candidate => {
            const separator = candidate.indexOf(' ')
            return (
              separator !== -1 &&
              normalizeKey(candidate.slice(0, separator)) ===
                wantedNormalizedKey
            )
          })
        }

        if (!line) {
          throw new Error(
            `No exact Trix result found for "${query}" in assembly "${searchstrain}"`,
          )
        }

        const locationMatch = line.match(/\["([^"\]]+)"\|/)
        if (!locationMatch) {
          throw new Error(
            `Trix result for "${query}" has no readable genomic location`,
          )
        }

        const location = decodeURIComponent(locationMatch[1])
        return location
      }

      const waitForPaint = () =>
        new Promise(resolve => {
          requestAnimationFrame(() => {
            requestAnimationFrame(resolve)
          })
        })

      const escapeAttributeValue = value =>
        String(value).replaceAll('\\', '\\\\').replaceAll('"', '\\"')

      const escapeCssId = value => {
        if (typeof CSS !== 'undefined' && CSS.escape) {
          return CSS.escape(String(value))
        }

        return String(value).replace(
          /[^a-zA-Z0-9_-]/g,
          character =>
            `\\${character.codePointAt(0).toString(16)} `,
        )
      }

      const findViewElement = view => {
        const id = String(view.id)
        const escapedAttributeId = escapeAttributeValue(id)
        const escapedCssId = escapeCssId(id)

        const selectors = [
          `#${escapedCssId}`,
          `[data-view-id="${escapedAttributeId}"]`,
          `[data-testid="view-${escapedAttributeId}"]`,
          `[data-testid="${escapedAttributeId}"]`,
          `[data-id="${escapedAttributeId}"]`,
        ]

        for (const selector of selectors) {
          const element = document.querySelector(selector)
          if (element) {
            return element
          }
        }

        const label = view.displayName || view.name
        if (label) {
          const possibleLabels = document.querySelectorAll(
            'h1, h2, h3, h4, h5, h6, [role="heading"], button, span, div',
          )

          for (const element of possibleLabels) {
            if (element.textContent?.trim() === label) {
              return element
            }
          }
        }

        return undefined
      }

      const scrollViewIntoCentre = async view => {
        if (typeof document === 'undefined') {
          return false
        }

        for (let attempt = 0; attempt < 20; attempt += 1) {
          await waitForPaint()

          const element = findViewElement(view)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            })

            return true
          }

          await sleep(100)
        }

        return false
      }
      ;(async () => {
        try {
          await when(() => pluginManager.rootModel?.session)

          const session = pluginManager.rootModel.session

          const url = new URL(window.location.href)

          const uniprotinput = url.searchParams.get("searchstrainstring");
          let searchstring;
          let searchstrain;
          if (uniprotinput) {
              [searchstrain, searchstring] = uniprotinput.split(":");
          } else {
              searchstring = url.searchParams.get("searchstring");
              searchstrain = url.searchParams.get("searchstrain");
          }

          if (!searchstring && !searchstrain) {
            return
          }

          if (!searchstring || !searchstrain) {
            const missingParam = searchstring
              ? 'searchstrain'
              : 'searchstring'
            const message = `"${missingParam}" must also be specified when using the URL navigation parameters`

            session.notify?.(message, 'error')
            return
          }

          await when(() => session.assemblyManager.assemblies.length > 0)

          // Resolve the (possibly de-punctuated/mis-cased) searchstrain
          // param against the actual configured assembly names, e.g.
          // "m2643" -> "M264-3".
          const resolvedStrain =
            session.assemblyManager.assemblies
              .map(assembly => assembly.name)
              .find(name => normalizeKey(name) === normalizeKey(searchstrain)) ||
            searchstrain

          await when(() => session.views.length > 0)

          const view = session.views.find(
            candidate =>
              candidate.type === 'LinearGenomeView' &&
              candidate.assemblyNames?.includes(resolvedStrain),
          )

          if (!view) {
            const message =
              `No LinearGenomeView found for assembly "${resolvedStrain}"`

            session.notify?.(message, 'error')
            return
          }

          session.views.forEach(candidate => {
            if (candidate.type !== 'LinearGenomeView') {
              return
            }

            const shouldBeMinimized = candidate.id !== view.id
            if (candidate.minimized !== shouldBeMinimized) {
              candidate.setMinimized?.(shouldBeMinimized)
            }
          })

          if (view.minimized) {
            view.setMinimized?.(false)
          }

          if (session.focusedViewId !== view.id) {
            if (typeof session.setFocusedViewId === 'function') {
              session.setFocusedViewId(view.id)
            }
          }

          // If the hierarchical track selector panel is already open, make
          // sure it's showing the track list for the assembly/view being
          // navigated to, rather than whatever view it was last opened for.
          // We don't force it open if it's currently closed.
          const existingTrackSelector = session.widgets?.get?.(
            'hierarchicalTrackSelector',
          )

          if (existingTrackSelector && existingTrackSelector.view !== view) {
            if (typeof view.activateTrackSelector === 'function') {
              view.activateTrackSelector()
            }
          }

          await when(() => view.initialized)

          await when(() => {
            const assembly =
              session.assemblyManager.get(resolvedStrain)

            return Boolean(assembly?.initialized)
          })

          await scrollViewIntoCentre(view)

          const resolvedSearchstring = searchstring

          let resolvedLocation

          try {
            resolvedLocation = await findTrixLocation(
              resolvedSearchstring,
              resolvedStrain,
            )

            await view.navToLocString(
              resolvedLocation,
              resolvedStrain,
              0.2,
            )
          } catch (trixError) {
            try {
              // Allows direct coordinate input such as D39V:1000..2000.
              resolvedLocation = resolvedSearchstring

              await view.navToLocString(
                resolvedLocation,
                resolvedStrain,
                0.2,
              )
            } catch (locationError) {
              session.notify?.(`${trixError}`, 'error')
               return
            }
          }
          await scrollViewIntoCentre(view)
            /// BLOCK FOR GENE INFO STARTS HERE ///
            const sessionId = session.id
            const expectedTrackId = `${getTrackIdPrefix(resolvedStrain)}_sorted.gff`
            const trackConfig = session.tracks.find(track => track.trackId === expectedTrackId)
            const trackId = trackConfig.trackId
            const targetView = session.views.find(view => view.type === 'LinearGenomeView' && view.assemblyNames?.includes(resolvedStrain))
            const liveTrack = targetView.getTrack?.(trackId) || targetView.tracks.find(track => track.configuration?.trackId === trackId)
            const adapterConfig = readConfObject(trackConfig, 'adapter')
            const rpcManager = session.rpcManager
            const locationMatch = resolvedLocation.match(/^([^:]+):([\d,]+)\.\.([\d,]+)$/)
            const [, refName, startText, endText] = locationMatch
            const queryRegion = {
              refName,
              start: Number(startText.replaceAll(',', '')) - 1,
              end: Number(endText.replaceAll(',', '')),
              assemblyName: resolvedStrain,
            }
            const rawFeatures = await rpcManager.call(sessionId, 'CoreGetFeatures', { sessionId, adapterConfig, regions: [queryRegion] })
            const features = (rawFeatures || []).map(feature => typeof feature?.get === 'function' ? feature : new SimpleFeature(feature))
            const normalizedSearch = normalizeKey(resolvedSearchstring)
            const targetFeature = features.find(feature =>
              [
                feature.get('Name'),
                feature.get('gene'),
                feature.get('locus_tag'),
                feature.get('Spy_locus_tag'),
                ...(String(feature.get('alias') || '').split(',').map(value => value.trim())),
              ]
                .filter(Boolean)
                .some(value => normalizeKey(value) === normalizedSearch),
            )
            
            if (!targetFeature) {
              session.notify?.(
                `No feature found matching "${resolvedSearchstring}" in track "${expectedTrackId}"`,
                'error',
              )
              return
            }
            
            const featureDisplay = liveTrack.displays.find(display => typeof display.selectFeature === 'function')
            await featureDisplay.selectFeature(targetFeature)
            /// BLOCK FOR GENE INFO ENDS HERE ///
          window.history.pushState(null, '', url)
        } catch (error) {
          const session = pluginManager.rootModel?.session
          session?.notify?.(
            `URLNavigationPlugin failed: ${error}`,
            'error',
          )
        }
      })()
    }
  }
  ;(typeof self !== 'undefined' ? self : window)
    .JBrowsePluginURLNavigationPlugin = {
    default: URLNavigationPlugin,
  }
})()