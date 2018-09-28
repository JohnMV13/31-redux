import React, { Component } from 'react';

export default class Form extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let business={};
    business.name=event.target.name.value;
    business.established=event.target.established.value;
    this.props.handleComplete(business);
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="established" placeholder="Established"></input>
          <input type="submit"></input>
        </form>
      </React.Fragment>
    )
  }
}