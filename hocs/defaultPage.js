import React from 'react';

import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth';

export default Page => class DefaultPage extends React.Component {
  static getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req);
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
    return {
      ...pageProps,
      loggedUser,
      isAuthenticated: !!loggedUser,
    };
  }
  render() {
    return <Page {...this.props} />;
  }
};
