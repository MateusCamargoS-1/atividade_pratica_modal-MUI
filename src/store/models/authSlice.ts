import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  userEmail: string | null;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  userEmail: localStorage.getItem('userEmail') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userEmail = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
