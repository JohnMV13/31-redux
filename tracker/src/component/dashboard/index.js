import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/index';
import Item from '../item/index';

import * as actions from '../../redux/action/business-action';

class DashboardContainer extends Component {
  handleAdd = (business) => {
    this.props.createBusiness(business);
  }

  render(){
    return(
      <React.Fragment>
        <h2>Dashboard</h2>
        <Form handleComplete={this.handleAdd}/>
        {this.props.business.map(business => (
          <Item key={business._id} business={business} handleDelete={this.props.deleteBusiness}/>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    business: state, //.business,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBusiness: (business) => dispatch(actions.createBusiness(business)),
  deleteBusiness: (business) => dispatch(actions.deleteBusiness(business)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);