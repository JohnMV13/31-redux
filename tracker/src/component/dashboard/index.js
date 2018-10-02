import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/index';
import Item from '../item/index';

import * as company from '../../redux/action/business-action';

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
  createBusiness: (business) => dispatch(company.createBusiness(business)),
  deleteBusiness: (business) => dispatch(company.deleteBusiness(business)),
  updateBusiness: (business) => dispatch(company.updateBusiness(business)),
})

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(DashboardContainer);