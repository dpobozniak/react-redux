import React, { Component } from 'react';

import GameList from './game/GameList';

class AboutComponent extends Component {
  render() {
    return (
      <div>
        <h1>AboutComponent</h1>
        <GameList />
      </div>
    );
  }
}

export default AboutComponent;
