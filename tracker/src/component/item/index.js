import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/index';
import GameForm from '../form/game-form';
import GameItem from './game-item';

import * as gameActions from '../../redux/action/game-actions';

class BusinessItemContainer extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.business);
  }

  render(){
    console.log(this.props);
    return(
      <React.Fragment>
        <div className="business">{this.props.business.name} {this.props.business.established}</div>
        <Form handleComplete={this.props.handleComplete} currentBusiness={this.props.business}/>
        <button onClick={this.deleteObject}>Delete</button>
        <GameForm handleComplete={this.props.createGame} 
          business_id={this.props.business._id}
        />
        {this.props.game
          .filter(game => game.business === this.props.business._id)
          .map(game => 
            <GameItem
              key={game._id}
              game={game}
              handleDelete={this.props.deleteGame}
              handleComplete={this.props.updateGame}
            />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createGame: (game) => dispatch(gameActions.createGame(game)),
  deleteGame: (game) => dispatch(gameActions.deleteGame(game)),
  updateGame: (game) => dispatch(gameActions.updateGame(game)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(BusinessItemContainer);