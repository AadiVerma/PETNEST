"use client"
import {configureStore} from '@reduxjs/toolkit';
import themereducer from '../Slice/ThemeSlice';
import AuthReducer from '../Slice/AuthSlice';
import {Provider,useDispatch as useReduxDispatch,useSelector as useReduxSelector ,TypedUseSelectorHook } from 'react-redux';
export const store=configureStore({
    reducer:{
        Theme:themereducer,
        Auth:AuthReducer
    }
})
export type RootState = {
    Theme: boolean; 
    Auth: {
        isAuthenticated: boolean; 
    };
};
export {Provider};
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;