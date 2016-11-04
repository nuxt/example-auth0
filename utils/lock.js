const getLock = (options) => {
  const CLIENT_ID = '';
  const CLIENT_DOMAIN = '';
  const Auth0Lock = require('auth0-lock').default;
  return new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN, options);
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = () => ({
  closable: false,
  auth: {
    responseType: 'token',
    redirectUrl: `${getBaseUrl()}/auth/signed-in`,
    params: {
      scope: 'openid profile email',
    },
  },
});

export const show = () => getLock(getOptions()).show();
export const logout = () => getLock().logout({ returnTo: getBaseUrl() });
