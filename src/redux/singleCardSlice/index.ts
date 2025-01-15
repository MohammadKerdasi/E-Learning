import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../redux/store';
import { dataTestmonialsLKHH } from '../../data/dataTestHH+LK';
import { datatest } from '../../interfaces'; 

interface SingleCardState {
  card: datatest | null;
}

const initialState: SingleCardState = {
  card: null,
};

const singleCardSlice = createSlice({
  name: 'singleCard',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<datatest>) => {
      state.card = action.payload;
    },
    clearCard: (state) => {
      state.card = null;
    },
  },
});

export const { setCard, clearCard } = singleCardSlice.actions;
export default singleCardSlice.reducer;

export const fetchCardByIndex = (index: number) => (dispatch: AppDispatch) => {
  if (index < 0 || index >= dataTestmonialsLKHH.length) {
    console.error('Invalid index');
    return;
  }
  const selectedCard = dataTestmonialsLKHH[index];
  dispatch(setCard(selectedCard));
};
