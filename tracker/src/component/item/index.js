import React, { Component } from 'react';
import Form from '../form/index';

export default class BusinessItem extends Component {
  deleteObject = () => {
    this.props.handleDelete(this.props.business)
  }

  render(){
    return(
      <React.Fragment>
        <div>{this.props.business.title}</div>
        <Form/>
        <button onClick={this.deleteObject}>Delete</button>
      </React.Fragment>
    )
  }
}