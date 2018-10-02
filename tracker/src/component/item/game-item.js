import React, { Component } from 'react';
import GameForm from '../form/game-form';

export default class GameItem extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.game);
  }

  render() {
    console.log(this.props);
    return(
      <React.Fragment>
        <div>{this.props.game.name} : {this.props.game.units}</div>
        <GameForm/>
        <button onClick={this.deleteObject}>Delete</button>
      </React.Fragment>
    )
  }
}