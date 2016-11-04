const getLock = (options) => {
  const CLIENT_ID = 'qpbR2t3SbGeBvSutVEtGitHeM5OJQbtu';
  const CLIENT_DOMAIN = 'luisrudge.auth0.com';
  const Auth0Lock = require('auth0-lock').default;
  return new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN, options);
};

const showOptions = {
  closable: false,
  auth: {
    responseType: 'token',
    redirectUrl: 'http://localhost:3000/auth/signed-in',
    params: {
      scope: 'openid profile email',
    },
  },
};
export const show = () => getLock(showOptions).show();
export const logout = () => getLock().logout({ returnTo: 'http://localhost:3000/' });
