import React, { Component } from 'react';

export default class GameForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let game = {}
    if(this.props.game){
      console.log(this.props.game._id);
      game._id = this.props.game._id;
      game.business = this.props.game.business;
    }
    else{
      game.business = this.props.business_id;
    }
    game.name = event.target.name.value;
    game.units = event.target.units.value;
   
    this.props.handleComplete(game);
  }
  render(){
    return(
      this.props.game?
      <div>
        <div>{this.props.game.business}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" defaultValue={this.props.game.name}/>
          <input type="text" name="units" defaultValue={this.props.game.units}/>
          <input type="submit"></input>
        </form>
      </div>:
      <div>
        <h3>Add a song!</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="game name"/>
          <input type="text" name="units" placeholder="units"/>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}