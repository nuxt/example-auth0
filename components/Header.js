import React, { PropTypes } from 'react'
import Link from 'next/link'
import css from 'next/css'

const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20
  }),
  link: isActive => css({
    marginRight: 20,
    fontSize: 14,
    color: isActive ? '#333' : '#999',
    textDecoration: 'none',
    textTransform: 'uppercase',
    paddingTop: 2,
    paddingBottom: 2,
    borderTop: `1px solid ${isActive ? '#333' : 'transparent'}`,
    borderBottom: `1px solid ${isActive ? '#333' : 'transparent'}`,
    transition: 'color .25s',
    fontWeight: isActive ? '600' : '400',
    ':hover': {
      color: '#333'
    }
  })
}

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/secret', text: 'Top Secret', authRequired: true },
  { href: '/auth/sign-in', text: 'Sign In', anonymousOnly: true },
  { href: '/auth/sign-off', text: 'Sign Off', authRequired: true }
]

const getAllowedLinks = isAuthenticated => links.filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
                                                .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

const Header = ({ isAuthenticated, currentUrl }) => (
  <div className={styles.header}>
    {getAllowedLinks(isAuthenticated).map(l => (
      <Link key={l.href} href={l.href}>
        <a className={styles.link(currentUrl === l.href)}>
          {l.text}
        </a>
      </Link>
    ))}
  </div>
)

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
}

export default Header
