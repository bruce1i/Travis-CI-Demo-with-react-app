import React from 'react';
import {connect} from 'react-redux';
import {actAddCount, actWho} from './redux.js';
import Loadable from 'react-loadable';

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