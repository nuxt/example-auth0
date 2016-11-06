import React from 'react'
import Link from 'next/link'
import css from 'next/css'

const styles = {
  heading: css({
    fontSize: 50,
    fontWeight: 200,
    lineHeight: '40px',
    color: '#e74c3c'
  }),
  content: css({
    fontSize: 30,
    fontWeight: 200,
    lineHeight: '40px',
    color: '#e74c3c'
  }),
  link: css({
    color: '#e74c3c',
    paddingBottom: 2,
    borderBottom: '1px solid #c0392b',
    textDecoration: 'none',
    fontWeight: 400,
    lineHeight: '30px',
    transition: 'border-bottom .2s',
    ':hover': {
      borderBottomColor: '#e74c3c'
    }
  })
}

export default () => (
  <div>
    <h1 className={styles.heading}>You can't see this!</h1>
    <p className={styles.content}>
      You're not authenticated yet. Maybe you want to <Link href='/auth/sign-in'><a className={styles.link}>sign in</a></Link> and see what happens?
    </p>
  </div>
)
