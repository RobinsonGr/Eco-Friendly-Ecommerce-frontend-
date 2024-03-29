import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { items: [] },
    reducers: {
        addProduct(state, action) {
            const { id, price, name, quantity } = action.payload;
            (current(state))
            const existingProductIndex = state.items.findIndex(product => product.id === id);

            if (existingProductIndex !== -1) {
                // If product already exists, update quantity
                state.items[existingProductIndex] = {
                    ...state.items[existingProductIndex],
                    quantity: state.items[existingProductIndex].quantity + 1
                };
            } else {
                // If product does not exist, add it with quantity 1
                state.items.push({
                    id,
                    price,
                    name,
                    quantity
                });
            }
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
