/* eslint react/prop-types: 0 */
import React from 'react'

import NotAuthorized from '../components/NotAuthorized'
import defaultPage from './defaultPage'

const securePagehoc = Page => props => (!props.isAuthenticated ? <NotAuthorized /> : <Page {...props} />)

export default Page => defaultPage(securePagehoc(Page))
