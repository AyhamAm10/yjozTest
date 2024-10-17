import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slice/categorySlice'
import  productByCategorySlice  from './slice/ProductByCategoru';
import productDetailsSlice  from './slice/ProductDetailsSlice';
import filterProductSlice from './slice/filterProductSlice';
import searchSlice from "./slice/searchApiSlice"
import searchLoadedSlice from "./slice/searchApiIsLoaded"
import verifySlice from './slice/verifyCode';
import userProfileSlice from "./slice/userProfileSlice"
export const store = configureStore({
  reducer: {categorySlice , productByCategorySlice , productDetailsSlice , filterProductSlice  , searchSlice , searchLoadedSlice , verifySlice , userProfileSlice} ,
})

export type StoreType = ReturnType<typeof store.getState>;
