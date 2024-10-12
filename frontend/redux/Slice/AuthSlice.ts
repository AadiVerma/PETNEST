import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}
const initialState= ():AuthState => {
    if (typeof localStorage !== 'undefined') {
        return {
            isAuthenticated:localStorage.getItem("token")!==null
        }
    }
    return {isAuthenticated: false};
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        addauth: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload; 
        },
        removeauth: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export default AuthSlice.reducer;
export const { addauth, removeauth } = AuthSlice.actions;
