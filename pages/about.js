import React from 'react';
import css from 'next/css';

import defaultPage from '../hocs/defaultPage';

const styles = {
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
};

const About = () => (
  <div>
    <h1 className={styles.heading}>Nothing to see here.</h1>
    <p className={styles.content}>
      This is just a random page.
    </p>
  </div>
);

export default defaultPage(About);
