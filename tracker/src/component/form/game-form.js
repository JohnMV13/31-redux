import React, { Component } from 'react';

const defaultState = {
  name: '',
  units: 0,
}

export default class GameForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.game || defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let game = {}
    if(this.props.game){
      game._id = this.props.game._id;
      game.business = this.props.game.business;
    }
    else{
      game.business = this.props.business_id;
    }
    game.name = event.target.name.value;
    game.units = event.target.units.value;
    this.props.handleComplete(game);
    if(!this.props.game){
      this.setState(defaultState);
    }
  }

  handleChange = (event) => {
    let { name, value, type } = event.target;

    this.setState({
      [name]: type = 'text' ? value : +value,
    });
  }

  render(){
    return(
      this.props.game
      ?
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="game" placeholder = "Game" defaultValue={this.props.game.name} />
          <input type="number" name="units" placeholder = "units sold" defaultValue={this.props.game.units} />
          <input type="submit"></input>
        </form>
      </div>
      :
      <div>
        <h3>Add a Game!</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Game" value={this.state.name} onChange={this.handleChange}/>
          <input type="number" name="units" placeholder="Units" value={this.state.units} onChange={this.handleChange}/> 
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}