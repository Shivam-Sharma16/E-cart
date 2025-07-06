
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import cartSlice from './reducers/cartSlice';


export const store=configureStore({
    reducer:{
        userReducer:userSlice,
        productReducer:cartSlice,
        cartReducer:cartSlice
    }
})