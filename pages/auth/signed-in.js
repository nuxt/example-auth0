import React, { PropTypes } from 'react'

import { setToken, extractTokenFromHash } from '../../utils/auth'

export default class SignedIn extends React.Component {
  static propTypes = {
    url: PropTypes.object.isRequired
  }

  componentDidMount () {
    const token = extractTokenFromHash()
    if (token) {
      setToken(token)
    }
    this.props.url.pushTo('/')
  }
  render () {
    return null
  }
}
