import React, { PropTypes } from 'react';

export default class extends React.Component {
  static getInitialProps = async ({ req }) => ({
    userAgent: req ? req.headers['user-agent'] : window.navigator.userAgent,
  });
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>
        About {this.props.userAgent}
      </div>
    );
  }
}
