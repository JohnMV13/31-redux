import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/index';
import Item from '../item/index';

import * as actions from '../../redux/action/business-action';
import * as action from '../../redux/action/game-actions';

class DashboardContainer extends Component {
  handleAdd = (business) => {
    this.props.createBusiness(business);
    console.log(this.props);
  }
  handleUpdate = (business) => {
    this.props.updateBusiness(business);
  }
  handleAddGame = (game) => {
    this.props.createGame(game);
  }
  handleUpdateGame = (game) => {
    this.props.updateGame(game);
  }

  render(){
    console.log(this.props);
    return(
      <React.Fragment>
        <h2>Create Business</h2>
        <Form handleComplete={this.handleAdd}/>
        {this.props.business.map(business => (
          <Item 
            key={business._id} 
            business={business} 
            handleDelete={this.props.deleteBusiness}
            handleComplete={this.handleUpdate}
            />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    business: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBusiness: (business) => dispatch(actions.createBusiness(business)),
  deleteBusiness: (business) => dispatch(actions.deleteBusiness(business)),
  updateBusiness: (business) => dispatch(actions.updateBusiness(business)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);