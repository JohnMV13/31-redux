import React, { Component } from 'react';

export default class BusinessForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let business={};
    if(this.props.currentBusiness){
      business._id = this.props.currentBusiness._id;
    }
    business.name=event.target.name.value;
    business.established=event.target.established.value;
    this.props.handleComplete(business);
  }

  render(){
    return(
      this.props.currentBusiness ?
      // <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="established" placeholder="Established"></input>
          <input type="submit"></input>
        </form> :
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' placeholder='title'></input>
          <input type='text' name='description' placeholder='description'></input>
          <input type='submit' value='submit'></input>
        </form>
      // </React.Fragment>
    )
  }
}