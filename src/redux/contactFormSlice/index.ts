import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState, Submission } from "../../interfaces";
const initialState: FormState = {
    submissions: [],
};
const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {
        addSubmission: (state, action: PayloadAction<Submission>) => {
            state.submissions.push(action.payload);
        }
    }
});

export const { addSubmission } = contactFormSlice.actions;
export default contactFormSlice.reducer;