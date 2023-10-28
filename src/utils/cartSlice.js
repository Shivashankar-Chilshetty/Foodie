import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items.length = 0;
            //return {items:[]}
            //state.items = []
        },
        removeItem: (state) => {
            state.items.pop();
        }
    }
});

//exporting the action
export const { addItem, clearCart, removeItem } = cartSlice.actions;
//exporting the reducers
export default cartSlice.reducer;
