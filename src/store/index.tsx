import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import authReducer from './auth'
const reducer = combineReducers({
  // here we will be adding reducers
  auth: authReducer
})
const store = configureStore({
  reducer,
})
export default store;