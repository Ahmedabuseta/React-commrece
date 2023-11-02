import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../config/configApi";
import img from '../assest/img/13763771_5350890.svg'

export const fetchcategories = createAsyncThunk(
  "productSlice/fetchcategories",
  async () => {
    const response = await api('/products/categories'
    );
    return response.data;
  }
);
export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const response = await api('/products'
    );
    return response.data.products;
  }
);
export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async (id) => {
    const response = await api('/products/'+id
    );
    console.log(response.data)
    return response.data;
  }
);
const date = new Date()
let id = date.getTime()

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    all:[],
    category:[],
    chooseProduct:{}
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(fetchcategories.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
    state.chooseProduct ={...action.payload};
    });
  },
});

export const {  } = productSlice.actions;
export default productSlice.reducer;