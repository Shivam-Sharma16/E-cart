
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    cart:[]
}
const cartSlice=createSlice({
    name:"cart  ",
    initialState,
    reducers:{
        loaduser:(state,action)=>{
            state.cart=action.payload
        }

    }
})

export default cartSlice.reducer
export const {loadcart} =cartSlice.actions
