import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "./../../data/data";
import { Course, Pricing } from "./../../interfaces";
import { pricingCardsData } from "../../data/dataNa";

// Course slice
interface CourseState {
  courses: Course[];
  selectedCourse: Course[];
}

const initialCourseState: CourseState = {
  courses: courses,
  selectedCourse: [],
};

const courseSlice = createSlice({
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
  },
});

export const { showSomeCourse } = courseSlice.actions;
// -----------------------------------------------------------------------------------------------------

// Pricing slice ? nahla
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

const pricingSlice = createSlice({
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
// -----------------------------------------------------------------------------------------------------



export const pricingReducer = pricingSlice.reducer;
export const courseReducer = courseSlice.reducer;
