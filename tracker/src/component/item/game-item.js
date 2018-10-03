import React, { Component } from 'react';
import GameForm from '../form/game-form';


export default class GameItem extends Component{
  deleteObject = () => {
    this.props.handleDelete(this.props.game);
  }
  render(){
    return(
      <div>
        {this.props.game.name}
        <GameForm handleComplete={this.props.handleComplete} game={this.props.game}/>
        <button onClick={this.deleteObject}>Delete</button>
      </div>
    )
  }
}