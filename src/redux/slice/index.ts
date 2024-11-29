import { createSlice } from "@reduxjs/toolkit";
import { courses } from "./../../data/data";
import { Course } from "./../../interfaces";


interface CourseState {
  courses: Course[];
  selectedCourse: Course[];
}

const initialState: CourseState = {
  courses: courses,
  selectedCourse: [],
};


export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    showSomeCourse: (state, action) => {
      const { keepKeys }: { keepKeys: (keyof Course)[] } = action.payload;

      const selectedCourses = state.courses.map((courseData) => {
        const filteredCourse: Record<keyof Course, unknown> = {} as Record<keyof Course, unknown>;

        keepKeys.forEach((key) => {
          filteredCourse[key] = courseData[key];
        });

        return filteredCourse;
      });

      state.selectedCourse = selectedCourses as Course[];
    },
  },
});

export const { showSomeCourse } = courseSlice.actions;

export default courseSlice.reducer;


