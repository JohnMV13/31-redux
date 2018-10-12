import React, { Component } from 'react';
import GameForm from '../form/game-form';
import Modal from '../modal/modal';


export default class GameItem extends Component{
  constructor(props) {
    super(props);

    this.state = { showEdit: false };
  }

  deleteObject = () => {
    this.props.handleDelete(this.props.game);
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
    return(
      <div>
        <div className='spacing'>
          {this.props.game.name} {this.props.game.units} Units Sold
          <button className='edit' onClick={this.showModal}>Edit</button>
        </div>
        <Modal title='edit' show={this.state.showEdit} handleClose={this.hideModal}>
          <div>
            <GameForm handleComplete={this.props.handleComplete} game={this.props.game}/>
            <button className='delete' onClick={this.deleteObject}>Delete</button>
          </div>
        </Modal>
      </div>
    )
  }
}