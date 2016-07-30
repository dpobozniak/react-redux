import React, { Component } from 'react';
import { Link } from 'react-router';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to my app</h2>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
