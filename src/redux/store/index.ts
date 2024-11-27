import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './../slice/index'

export const store = configureStore({reducer: { courses: courseReducer }})