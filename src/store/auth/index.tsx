import { createSlice } from '@reduxjs/toolkit';
import { IAuthStore } from '../type';


const initialState: IAuthStore = {
  userInfo: {},
  isLogin: false,
}

export const todoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeSetAuth: (state, action) => {
      return { ...state };
    },
    storeSetIsLogin: (state, action) => {
      return { ...state, isLogin: action.payload }
    },
    storeSetUserInfo: (state, action) => {
      return { ...state, userInfo: action.payload };
    }
  },
});

// this is for dispatch
export const { storeSetAuth, storeSetIsLogin, storeSetUserInfo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;