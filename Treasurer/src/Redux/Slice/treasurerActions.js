import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const treasurerCredntialsc = createAsyncThunk(
    "Treasurerdata/treasurerCredntialsc",
    async(_,{rejectWithValue}) =>{
        try{
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/Bharathi_Lodge/Backend/get_user.php`)
            return result.data;
        }catch(error){
            rejectWithValue(error.result.data,"error")
        }
    }
)

export const getMasterDegree = createAsyncThunk(
    
    "Treasurerdata/getMasterDegree",
    async(_,{rejectWithValue}) =>{
        

        try{
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/Bharathi_Lodge/Backend/get_degree.php`)
            return result.data;
        }catch(error){
            rejectWithValue(error.result.data,"error")
        }
    }
)

export const updateMasterDegree = createAsyncThunk(
    "Treasurerdata/updateMasterDegree",
    async(data,{rejectWithValue}) =>{
        try{
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/Bharathi_Lodge/Backend/update_degree.php?id=${data.id}`,data)
            return result.data;
        }catch(error){
            rejectWithValue(error.result.data,"error")
        }
    }
)

export const checkLogin = createAsyncThunk(
    "Treasurerdata/checkLogin",
    async(formData ,{rejectWithValue}) =>{
        try{
            
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/Bharathi_Lodge/Backend/login.php `,formData)
            // const result = await axios.post(`http://localhost:4000/treasurerroute/treasurer/login`,formData)
            return result.data;
        }catch(error){
            rejectWithValue(error.result.data)
        }
    }
)
