import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "./../../data/data";
import { Course, Pricing } from "./../../interfaces";
import { pricingCardsData } from "../../data/dataNa";

// ------------------------------------
// Course Slice
// ------------------------------------
interface CourseState {
  courses: Course[];
  selectedCourse: Course[];
}

const initialCourseState: CourseState = {
  courses: courses,
  selectedCourse: [],
};

export const courseSlice = createSlice({
  name: "courses",
  initialState: initialCourseState,
  reducers: {
    showSomeCourse: (state, action: PayloadAction<{ keepKeys: (keyof Course)[] }>) => {
      const { keepKeys } = action.payload;

      const selectedCourses = state.courses.map((courseData) => {
        const filteredCourse: Record<keyof Course, unknown> = {} as Record<keyof Course, unknown>;

        keepKeys.forEach((key) => {
          filteredCourse[key] = courseData[key];
        });

        return filteredCourse;
      });
      state.selectedCourse = selectedCourses as Course[];
    },
    sliceFirstFiveCourses: (state) => {
      state.selectedCourse = state.selectedCourse.slice(0, 5);
    },
  },
});

export const { showSomeCourse, sliceFirstFiveCourses } = courseSlice.actions;

// ------------------------------------
// Pricing Slice
// ------------------------------------
interface PricingState {
  pricingCards: Pricing[];
  selectedCategory: string;
  filteredPricingCards: Pricing[];
}

const initialPricingState: PricingState = {
  pricingCards: pricingCardsData,
  selectedCategory: "monthly",
  filteredPricingCards: [],
};

initialPricingState.filteredPricingCards = initialPricingState.pricingCards.filter(
  (card) => card.category === initialPricingState.selectedCategory
);

export const pricingSlice = createSlice({
  name: "pricing",
  initialState: initialPricingState,
  reducers: {
    filterPricingCardsByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.selectedCategory = category;

      state.filteredPricingCards = state.pricingCards.filter(
        (card) => card.category?.toLowerCase() === category?.toLowerCase()
      );
    },
  },
});

export const { filterPricingCardsByCategory } = pricingSlice.actions;

// ------------------------------------
// Export Reducers
// ------------------------------------
export const courseReducer = courseSlice.reducer;
export const pricingReducer = pricingSlice.reducer;
