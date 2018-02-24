import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import { actAddCount, actWho } from './redux.js';

const LoadableHome = Loadable({
  loader: () => import('./index.jsx'),
  loading: () => (<div>Loading..</div>),
});

const mapStateToProps = state => ({
  count: state.count,
  user: state.user,
});

const mapDispatchToProps = {
  actAddCount,
  actWho,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadableHome);
