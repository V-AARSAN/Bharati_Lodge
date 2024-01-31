import {configureStore} from "@reduxjs/toolkit";
import treasurerCredntialsc from "./Slice/treasurerSlice";

export const Store = configureStore({
    devTools:true,
    reducer:{
        Treasurer:treasurerCredntialsc
    }
})