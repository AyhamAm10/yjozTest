import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchReq } from "../../type/requseteType";

const initialState: boolean = false;

const searchLoadedSlice = createSlice({
  name: "search Loaded",
  initialState,
  reducers: {
    isLoadedApi: (state:boolean) =>  true ,
    notLoadedApi: (state:boolean) => false,
  },
});

export const { isLoadedApi , notLoadedApi } = searchLoadedSlice.actions;
export default searchLoadedSlice.reducer;
