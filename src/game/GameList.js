import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from './actions';

import './_styles.scss';

class GameList extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    let i = 0;
    const obj = {
      league: 'PHL',
      i: i++,
    };

    dispatch(createGame(obj));
  }

  render() {
    return (
      <button className="button" onClick={this.handleClick}>Click</button>
    );
  }
}

const mapStateToProps = (state) => (
  {
    games: state.games.items,
    isFetching: state.games.isFetching,
  }
)

export default connect(mapStateToProps)(GameList);
