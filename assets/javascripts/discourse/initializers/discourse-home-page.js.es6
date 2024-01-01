import { setDefaultHomepage } from 'discourse/lib/utilities'
//import { withPluginApi } from 'discourse/lib/plugin-api'

const LANG_REGEX = /^[a-z][a-z]$/

export default {
  name: 'discourse-home-page',
  initialize(container, app) {
    const siteSettings = container.lookup('site-settings:main')

    // If plugin is disabled, quit
    if (!siteSettings['discourse_home_page_enabled']) {
      return
    }

    // Get the home page paths
    const paths = siteSettings['discourse_home_page_path'].split('|')

    // Check the paths
    let pathsObj = {}
    for (let i = 0; i < paths.length; ++i) {
      let lang
      let path
      if (i === 0) {
        lang = 'default'
        path = paths[i].trim()
      } else {
        const s = paths[i].split(',')
        lang = s[0].trim()
        if (!LANG_REGEX.test(lang)) {
          logError(`invalid language code "${lang}"`)
          return
        }
        path = (s[1] || '').trim()
      }
      if (path === '/' || !path.startsWith('/')) {
        logError(`invalid path "${path}"`)
        return
      }

      // Fix for issue #4
      // Remove the leading '/', as it is not supported by Discourse anymore
      path = path.substring(1)
      pathsObj[lang] = path
    }

    // Get the user language, as detected by Discourse
    const discourseLang = I18n.locale.substring(0, 2)

    // Set the home page to the right language
    setDefaultHomepage(pathsObj[discourseLang] || pathsObj.default)

    /*
    //
    // https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/routes/forgot-password.js.es6#L13
    // The line above might cause an issue, but I couldn't get my Discourse 
    // instance to run through it. A fix might be to reopen the class and 
    // monkey patch the beforeModel() function with this:
    // this.replaceWith(
    //   loginRequired ? "login" : `/${defaultHomepage()}`
    // )
    //
    withPluginApi('0.8.30', api => {
      api.onAppEvent('page:changed', ({ currentRouteName, title, url }) => {
        console.log('currentRouteName: ', currentRouteName, title, url)
      })
    })
    */
  }
}

function logError(msg) {
  console.error(`discourse-home-page error: ${msg}`)
}
