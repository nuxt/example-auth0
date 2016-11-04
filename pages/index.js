import React, { PropTypes } from 'react';
import Link from 'next/link';

import defaultPage from '../hocs/defaultPage';

const links = [
  { href: '/about', text: 'About' },
  { href: '/secret', text: 'Top Secret', authRequired: true },
  { href: '/auth/sign-in', text: 'Sign In' },
  { href: '/auth/sign-off', text: 'Sign Off', authRequired: true },
];

const getAllowedLinks = isAuthenticated => links.filter(l => !l.authRequired || (l.authRequired && isAuthenticated));

const Index = ({ isAuthenticated }) => (
  <div>
    <div>
      <ul>
        <li>Home</li>
        {getAllowedLinks(isAuthenticated).map(l => (
          <li key={l.href}>
            <Link href={l.href}>{l.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    {isAuthenticated && (
      <div>
        This is a super secret div. You can only see this if you are authenticated!
      </div>
    )}
  </div>
);

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default defaultPage(Index);
