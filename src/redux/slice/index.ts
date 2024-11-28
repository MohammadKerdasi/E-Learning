import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data/data";

const initialState = {
  courses: courses,
  selectedCourse: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
