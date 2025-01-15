import { createSlice } from '@reduxjs/toolkit';
import { dataTestmonialsLKHH } from '../../data/dataTestHH+LK';
import { CardsState } from '../../interfaces';

const initialState: CardsState = {
  cards: dataTestmonialsLKHH,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {}, 
});

export default cardsSlice.reducer;
