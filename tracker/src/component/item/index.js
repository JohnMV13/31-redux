import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/index';
import GameForm from '../form/game-form';
import GameItem from './game-item';
import Modal from '../modal/modal';

import * as gameActions from '../../redux/action/game-actions';

class BusinessItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { showEdit: false };
  }

  deleteObject = () => {
    this.props.handleDelete(this.props.business);
  }

  showModal = () => {
    this.setState({
      showEdit: true,
    })
  }

  hideModal = () => {
    this.setState({
      showEdit: false,
    })
  }

  render(){
    console.log(this.props);
    return(
      <React.Fragment>
        <div  className="business">
          <div>
            {this.props.business.name} {this.props.business.established}
            <button className='edit' onClick={this.showModal}>Edit</button>
          </div>
            <Modal title='edit' show={this.state.showEdit} handleClose={this.hideModal}>
              <Form handleComplete={this.props.handleComplete} currentBusiness={this.props.business}/>
              <button className='delete' onClick={this.deleteObject}>Delete</button>
            </Modal>
          <GameForm handleComplete={this.props.createGame} 
            business_id={this.props.business._id}
          />
            {this.props.games
              .filter(game => game.business === this.props.business._id)
              .map(game => 
                <GameItem
                  key={game._id}
                  game={game}
                  handleDelete={this.props.deleteGame}
                  handleComplete={this.props.updateGame}
                />
            )}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createGame: (game) => dispatch(gameActions.createGame(game)),
  deleteGame: (game) => dispatch(gameActions.deleteGame(game)),
  updateGame: (game) => dispatch(gameActions.updateGame(game)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(BusinessItemContainer);