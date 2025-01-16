import { configureStore } from '@reduxjs/toolkit';
import { courseReducer, pricingReducer } from '../slice';
import contactFormReducer from './../contactFormSlice/index.ts';
import authReducer from './../authSlice/index.ts';
import cardsReducer from './../testimonialscardsSlice/index.ts'
import singleCardReducer from './../singleCardSlice/index.ts'

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    pricing: pricingReducer,
    contactForm: contactFormReducer ,
    auth: authReducer,
    cards: cardsReducer,
    singleCard: singleCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
