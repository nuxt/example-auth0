import React from 'react';
import Link from 'next/link';
import css from 'next/css';

const style = css({
  transition: 'all .4s',
  height: '100vh',
  color: '#fff',
  background: '#2ecc71',
  ':hover': {
    background: '#27ae60',
  },
  '@media (max-width: 600px)': {
    background: '#3498db',
    ':hover': {
      background: '#2980b9',
    },
  },
});

export default () => (
  <div className={style}>
    Home:<Link href="/about">About</Link>
  </div>
);
