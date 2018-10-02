import React, { Component } from 'react';

export default class GameForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let game = {};
    if(this.props.currentGame){
      game._id = this.props.currentGame._id;
    }
    game.name = event.target.name.value;
    game.units = event.target.units.value;
    this.props.handleComplete(game);
  }

  render() {
    let buttonText = this.props.currentGame ? 'update' : 'submit';
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='game' placeholder='Game'></input>
          <input type='text' name='units' placeholder='Units Sold'></input>
        </form>
      </React.Fragment>
    )
  }
}