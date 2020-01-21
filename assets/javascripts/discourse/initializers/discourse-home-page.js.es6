import { setDefaultHomepage } from 'discourse/lib/utilities'
//import { withPluginApi } from 'discourse/lib/plugin-api'

export default {
  name: 'discourse-home-page',
  initialize(container, app) {
    // If plugin is disabled, quit
    if (!app.SiteSettings['discourse_home_page_enabled']) {
      return
    }

    // Get the home page path
    const path = app.SiteSettings['discourse_home_page_path'].trim()
    if (!path || path === '/' || !path.startsWith('/')) {
      console.log(`discourse-home-page error: invalid path "${path}"`)
      return
    }

    // Set the home page path
    setDefaultHomepage(path.substring(1))

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
