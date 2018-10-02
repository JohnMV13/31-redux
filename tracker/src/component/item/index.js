import React, { Component } from 'react';
import Form from '../form/index';
import GameForm from '../form/game-form';
import GameItem from './game-item';

export default class BusinessItem extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.business);
  }

  render(){
    console.log(this.props);
    return(
      <React.Fragment>
        <div>{this.props.business.name} {this.props.business.established}</div>
        <Form/>
        <button onClick={this.deleteObject}>Delete</button>
      </React.Fragment>
    )
  }
}