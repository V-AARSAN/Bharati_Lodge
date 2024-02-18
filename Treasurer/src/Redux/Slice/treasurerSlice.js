import {  createSlice } from "@reduxjs/toolkit";
import { addMember, checkLogin, deleteMember, getMasterDegree, getMember, treasurerCredntialsc, updateMasterDegree, updateMember } from "./treasurerActions";
import { json } from "react-router-dom";

const initialState = {
    treasurerState:[],
    memberState:[],
    masterDegree:[],
    loginAuth:{},
    selectDegree:{},
    selectMember:{},
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
            state.masterDegree = null
        },
        selectTheDegree(state,action){
            state.selectDegree = state.masterDegree.find((data)=>data.id === action.payload)
        },
        selectTheMember(state,action){
            state.selectMember = state.memberState.find((data,index)=>data.id === action.payload)
        },
        postTheData(state,action){
            console.log(action.payload)
            state.memberState = action.payload
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
                state.isError = action.payload && action.payload.error
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
                state.isError = action.payload && action.payload.error
            })
            .addCase(getMember.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(getMember.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isError = '' 
                state.memberState = action.payload;
            })
            .addCase(getMember.rejected,(state,action)=>{
                state.isError = action.payload
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
                state.masterDegree = state.masterDegree.map((item)=> item.id == action.payload.id ? action.payload : item);
                state.isError = '' 
            })
            .addCase(updateMasterDegree.rejected,(state,action)=>{
                state.isError = action.payload
            })
            .addCase(addMember.pending,(state,action)=>{
                state.isLoading = true
            })
            .addCase(addMember.fulfilled,(state,action)=>{
                state.isLoading = false
                state.memberState =  action.payload;
                state.isError = '' 
            })
            .addCase(addMember.rejected,(state,action)=>{
                state.isError = action.payload

            })
            .addCase(updateMember.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(updateMember.fulfilled,(state,action)=>{
                state.isLoading = false
                state.memberState = state.memberState.map((item)=> item.id == action.payload.id ? action.payload : item);
                state.isError = '' 
            })
            .addCase(updateMember.rejected,(state,action)=>{
                state.isError = action.payload
            })
            .addCase(deleteMember.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(deleteMember.fulfilled,(state,action)=>{
                state.isLoading = false
                state.memberState = state.memberState.filter((item)=> item.id !== action.payload.id);
                state.isError = '' 
            })
            .addCase(deleteMember.rejected,(state,action)=>{
                state.isError = action.payload

            })
    }
})

export const {deletethedata,selectTheDegree,postTheData,selectTheMember} = slice.actions ;

export default slice.reducer;