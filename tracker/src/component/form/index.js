import React, { Component } from 'react';

const defaultState = {
  business: '',
  established: '',
}

export default class BusinessForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.business || defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let business={};
    if(this.props.business){
      business._id = this.props.currentBusiness._id;
    }
    business.name=event.target.business.value;
    business.established=event.target.established.value;
    this.props.handleComplete(business);
    if(!this.props.business) {
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
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="business" placeholder="Name" value={this.state.business} onChange={this.handleChange}></input>
          <input type="text" name="established" placeholder="Established" value={this.state.established} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </React.Fragment>
    )
  }
}
