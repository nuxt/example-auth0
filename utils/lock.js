import config from '../config.json'

const getLock = (options) => {
  const Auth0Lock = require('auth0-lock').default
  return new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = () => ({
  closable: false,
  auth: {
    responseType: 'token',
    redirectUrl: `${getBaseUrl()}/auth/signed-in`,
    params: {
      scope: 'openid profile email'
    }
  }
})

export const show = () => getLock(getOptions()).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })
