import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer';
import authReducer from './auth/auth-reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
