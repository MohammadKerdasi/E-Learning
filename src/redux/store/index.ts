import { configureStore } from '@reduxjs/toolkit';
import { courseReducer, pricingReducer } from '../slice';
import contactFormReducer from './../contactFormSlice/index.ts';
import authReducer from './../authSlice/index.ts';


export const store = configureStore({
  reducer: {
    courses: courseReducer,
    pricing: pricingReducer,
    contactForm: contactFormReducer ,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
