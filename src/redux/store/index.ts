import { configureStore } from '@reduxjs/toolkit';
import { courseReducer, pricingReducer } from '../slice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    pricing: pricingReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
