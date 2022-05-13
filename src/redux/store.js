import { configureStore } from '@reduxjs/toolkit';
import cart from './reducers/cart'

export default configureStore({
  reducer: {
    cart,
  },
});