import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './../slice/index.ts';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

