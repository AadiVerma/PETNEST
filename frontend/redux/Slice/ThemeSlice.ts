"use client"
import {createSlice} from '@reduxjs/toolkit';
const themeSlice=createSlice({
    name:'Theme',
    initialState:false,
    reducers:{
        changeTheme:(state,action)=>{
            return action.payload;
        }
    }
})
export default themeSlice.reducer;
export const {changeTheme}=themeSlice.actions;
