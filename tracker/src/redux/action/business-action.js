import uuid from 'uuid';

export const createBusiness = (business) => {
  business._id = uuid();
  return { 
    type: 'BUSINESS_CREATE',
    payload: business,
  }
}

export const deleteBusiness = (business) => {
  return{
    type: 'BUSINESS_DELETE',
    payload: business,
  }
}

export const updateBusiness = (business) => {
  return{
    type: 'BUSINESS_UPDATE',
    payload: business,
  }
}