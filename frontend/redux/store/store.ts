"use client"
import {configureStore} from '@reduxjs/toolkit';
import themereducer from '../Slice/ThemeSlice'
import {Provider,useDispatch as useReduxDispatch,useSelector as useReduxSelector } from 'react-redux';
export const store=configureStore({
    reducer:{
        Theme:themereducer,
    }
})
export {Provider};
export const useDispatch = () => useReduxDispatch();
export const useSelector = () => useReduxSelector((state:{Theme:boolean})=>state.Theme);
