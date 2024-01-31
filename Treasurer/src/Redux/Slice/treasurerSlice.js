import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { checkLogin, getMasterDegree, treasurerCredntialsc, updateMasterDegree } from "./treasurerActions";

const initialState = {
    treasurerState:[],
    masterDegree:[],
    loginAuth:{},
    selected:{},
    isLoading:false,
    isError:''
}



export const slice = createSlice({
    name:"Treasurerdata",
    initialState,
    reducers:{
        deletethedata(state,action){
            state.loginAuth = null
            state.treasurerState = null
        },
        selectTheData(state,action){
           state.selected = state.masterDegree.find((data)=>data.id == action.payload)
        }
    },
    extraReducers(builder){
        builder
            .addCase(treasurerCredntialsc.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(treasurerCredntialsc.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isError = '' 
                state.treasurerState = action.payload;
            })
            .addCase(treasurerCredntialsc.rejected,(state,action)=>{
                state.isError = action.payload.error
            })
            .addCase(getMasterDegree.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(getMasterDegree.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isError = '' 
                state.masterDegree = action.payload;
            })
            .addCase(getMasterDegree.rejected,(state,action)=>{
                state.isError = action.payload.error
            })
            .addCase(checkLogin.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(checkLogin.fulfilled,(state,action)=>{
                state.isLoading = false
                state.loginAuth = action.payload;
                state.isError = '' 
            })
            .addCase(checkLogin.rejected,(state,action)=>{
                state.isError = action.payload
            })
            .addCase(updateMasterDegree.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(updateMasterDegree.fulfilled,(state,action)=>{
                state.isLoading = false
                state.masterDegree =  action.payload;
                state.isError = '' 
            })
            .addCase(updateMasterDegree.rejected,(state,action)=>{
                state.isError = action.payload
            })

    }
})

export const {deletethedata,selectTheData} = slice.actions ;

export default slice.reducer;