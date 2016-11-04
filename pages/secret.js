import React, { PropTypes } from 'react';

import securePage from '../hocs/securePage';

const Secret = ({ loggedUser }) => (
  <div>
    Hi {loggedUser.email}. This is a super secure page!
  </div>
);

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

export default securePage(Secret);
