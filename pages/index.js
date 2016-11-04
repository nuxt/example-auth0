import React, { PropTypes } from 'react';
import Link from 'next/link';
import css from 'next/css';

import defaultPage from '../hocs/defaultPage';

const styles = {
  secretDiv: css({
    backgroundColor: '#ecf0f1',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: 2,
    padding: 10,
    minHeight: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '100',
    marginBottom: 30,
  }),
  main: css({
    maxWidth: 750,
    margin: '0 auto',
    textAlign: 'center',
  }),
  heading: css({
    fontSize: 40,
    fontWeight: 200,
    lineHeight: '40px',
  }),
  content: css({
    fontSize: 20,
    fontWeight: 200,
    lineHeight: '30px',
  }),
  link: css({
    color: '#333',
    paddingBottom: 2,
    borderBottom: '1px solid #ccc',
    textDecoration: 'none',
    fontWeight: 400,
    lineHeight: '30px',
    transition: 'border-bottom .2s',
    ':hover': {
      borderBottomColor: '#333',
    },
  }),
};

const SuperSecretDiv = () => (
  <div className={styles.secretDiv}>
    This is a super secret div.
  </div>
);

const createLink = (href, text) => (
  <a href={href} className={styles.link}>{text}</a>
);

const Index = ({ isAuthenticated }) => (
  <div>
    {isAuthenticated && <SuperSecretDiv />}
    <div className={styles.main}>
      <h1 className={styles.heading}>Hello, friend!</h1>
      <p className={styles.content}>
        This is a super simple example of how to use {createLink('https://github.com/zeit/next.js', 'next.js')} and {createLink('https://auth0.com/', 'Auth0')} together.
      </p>
      {!isAuthenticated && (
        <p className={styles.content}>
          You're not authenticated yet. Maybe you want to <Link href="/auth/sign-in">{createLink('/auth/sign-in', 'sign in')}</Link> and see what happens?
        </p>
      )}
      {isAuthenticated && (
        <p className={styles.content}>
          Now that you're authenticated, maybe you should try going to our <Link href="/secret">{createLink('/secret', 'super secret page')}</Link>!
        </p>
      )}
    </div>
  </div>
);

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default defaultPage(Index);
