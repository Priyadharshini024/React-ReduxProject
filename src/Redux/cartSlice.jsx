import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemInCart = state.cart.find(item => item.id === product.id);
      if (itemInCart) {
        itemInCart.quantity += 1; // Increment quantity if the item is already in the cart
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Add new product to the cart
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1; // Increment quantity of the existing item
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrement quantity
        } else {
          // If quantity is 1, remove the item from the cart
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
  },
});

// Export actions and reducer
export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
