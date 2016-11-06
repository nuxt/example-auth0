import React, { PropTypes } from 'react'
import css from 'next/css'

import securePage from '../hocs/securePage'

const styles = {
  content: css({
    fontSize: 20,
    fontWeight: 200,
    lineHeight: '30px'
  })
}

const Secret = ({ loggedUser }) => (
  <div>
    <p className={styles.content}>
      Hi {loggedUser.email}. This is a super secure page! Try loading this page again using the incognito/private mode of your browser.
    </p>
  </div>
)

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default securePage(Secret)
