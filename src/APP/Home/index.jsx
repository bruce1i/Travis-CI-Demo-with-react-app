import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const colors = ['red', 'black', 'blue', 'orange', 'yellow'];
const names = ['Bruce', 'Andy', 'Tom', 'Tony'];

class Home extends Component {
    static propTypes={
      count: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      actAddCount: PropTypes.func.isRequired,
      actWho: PropTypes.func.isRequired,
    };

    handleAdd = () => {
      this.props.actAddCount(this.props.count + 1);
      this.props.actWho(names[parseInt(Math.random() * 10) % 4]);
    };

    render() {
      const {
        count,
        user,
      } = this.props;

      return (
        <div className="app-home">
          <h1 className={colors[count % 5]}>Hello World! +{this.props.count}</h1>
          <div>&nbsp;{user && `${user} said.`}</div>
          <div>
            <button onClick={this.handleAdd}>Say Hello</button>
          </div>
        </div>
      );
    }
}

export default Home;
