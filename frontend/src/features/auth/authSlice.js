
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./suthService";

export const login = createAsyncThunk(
    "user/login",
    async (userData,thunkApi)=>{
        try{
            return await authService.login(userData)
        }
        catch(error){
            console.error("An error occurred:", error);
            const defaultMessage = error.message || error.toString();
            return thunkApi.rejectWithValue(defaultMessage)
        }
    }
)

export const register = createAsyncThunk(
    "user/register",
    async (userData,thunkApi)=>{
        try{
            return authService.register(userData)
        }catch(error){
            const defaultMessage =error.message || error.toString();
            return thunkApi.rejectWithValue(defaultMessage)
        }
    }
)

export const requestResetPassword = createAsyncThunk(
    "user/requset-password",
    async (email,thunkApi) =>{
        try{
            return authService.requestResetPassword(email)
        }catch(error){
            const defaultMessage =error.message || error.toString();
            return thunkApi.rejectWithValue(defaultMessage)
        }
    }
)

export const resetPassword = createAsyncThunk(
    "user/reset-password",
    async (data,thunkApi) =>{
        try{
            return authService.passwordReset(data)
        }catch(error){
            const defaultMessage = error.message || error.toString()
            return thunkApi.rejectWithValue(defaultMessage)
        }
    }
)


const initialState = {
    data:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.message=false
        }
    },
    extraReducers:(builder) =>{
        builder
            .addCase(login.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.data=action.payload
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading=false
                state.isSuccess=false
                state.isError=true
                state.message=action.payload
                state.data=null
            })
            .addCase(register.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.data=action.payload
                state.message="Registration Successful"
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading=false
                state.isSuccess=false
                state.data=null
                state.isError=true
                state.message=action.payload
            })
            .addCase(requestResetPassword.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(requestResetPassword.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.data=action.payload
                state.message="Link send in your Gmail"
            })
            .addCase(requestResetPassword.rejected,(state,action)=>{
                state.isLoading=false
                state.isSuccess=false
                state.data=null
                state.isError=true
                state.message=action.payload
            })
            .addCase(resetPassword.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(resetPassword.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.data=action.payload
                state.message="Successfully Change your password"
            })
            .addCase(resetPassword.rejected,(state,action)=>{
                state.isLoading=false
                state.isSuccess=false
                state.data=null
                state.isError=true
                state.message=action.payload
            })
    }
})



export const {reset}=authSlice.actions
export default authSlice.reducer