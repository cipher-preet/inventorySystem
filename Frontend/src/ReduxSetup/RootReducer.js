import { combineReducers } from 'redux';
import  {userReducer}  from './Reducer';
import  {LoginReducer}  from './Reducer';
import  {fetchProductReducer}  from './Reducer';
import  {createProductReducer}  from './Reducer';
import  {deleteProductReducer}  from './Reducer';
import  {fetchProductByIdReducer}  from './Reducer';
import  {updateProductReducer}  from './Reducer';

const rootReducer = combineReducers({
  user: userReducer,
  LoginReducer:LoginReducer,
  fetchProductReducer:fetchProductReducer,
  createProductReducer:createProductReducer,
  deleteProductReducer:deleteProductReducer,
  fetchProductByIdReducer:fetchProductByIdReducer,
  updateProductReducer:updateProductReducer,
});

export default rootReducer;