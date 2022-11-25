import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as cartServices from 'services/cartServices';
import { number } from 'yup';
import { useState } from 'react';

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async ( thunkAPI) => {
    // const [carts, setCarts] = useState<cartServices.orderItems[]>();
    const response = await cartServices.getCart();
    return response;
    // const response = await userAPI.fetchById(userId);
    // return response.data;
    // cartServices.getCart().then((data) => {
    //     setCarts(data);
    // });
});

export interface CartState {
    total: any;
}

const initialState = {
    total: number,
} as CartState;

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            console.log('redux test', action.payload.length);

            state.total= action.payload.length;
        });
    },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
