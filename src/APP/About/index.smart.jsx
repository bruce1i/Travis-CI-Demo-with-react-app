import React from 'react';
import Loadable from 'react-loadable';

const LoadableAbout = Loadable({
  loader: () => import('./index.jsx'),
  loading: () => (<div>Loading...</div>),
});

export default LoadableAbout;
