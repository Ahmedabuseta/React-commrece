import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../reducers/productsSlice";
import userSlice from "../reducers/user";
import cartSlice from "../reducers/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    users: userSlice,
    cart:cartSlice,
  },
});

export default store;