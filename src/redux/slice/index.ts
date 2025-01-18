import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "./../../data/data";
import { benefit, Course, Pricing } from "./../../interfaces";
import { pricingCardsData } from "../../data/dataNa";
import { benefites } from "../../data/benefitsDataLK";

// ------------------------------------
// Course Slice
// ------------------------------------
interface CourseState {
  courses: Course[];
  selectedCourse: Course[];
  benefitesData :  benefit[];
  fewBenefite : benefit[];
  customCard : Course []
}

const initialCourseState: CourseState = {
  courses: courses,
  selectedCourse: [],
  benefitesData:  benefites,
  fewBenefite : [] ,
  customCard : []
};

export const courseSlice = createSlice({
  name: "courses",
  initialState: initialCourseState,
  reducers: {
  
    showSomeCourse: (state, action: PayloadAction<{ id?: string | number; keepKeys: (keyof Course | string)[] }>) => {
      const { keepKeys, id } = action.payload;
    
      const getValueByPath = (obj: any, path: string) => {
        return path.split('.').reduce((acc, key) => {
          if (Array.isArray(acc)) {
            return acc.map((item) => {
              if (typeof key === 'string' && key.includes(',')) {
                const keys = key.split(',').map((k) => k.trim());
                return keys.reduce((res: Record<string, string | number>, k) => {
                  res[k] = item[k as keyof typeof item];
                  return res;
                }, {} as Record<string, string | number>);
              }
              return item[key as keyof typeof item];
            });
          }
          return acc && acc[key as keyof typeof acc];
        }, obj);
      };
    
      if (id) {
        state.customCard = state.courses.filter((blogItem) => blogItem.id == id);
        const selectedCoursesById = state.customCard.map((courseData) => {
          const filteredCourse: Record<keyof Course, any> = {} as Record<keyof Course, any>;
    
          keepKeys.forEach((key) => {
            if (typeof key === 'string' && key.includes('.')) {
              filteredCourse[key.split('.')[0] as keyof Course] = getValueByPath(courseData, key);
            } else {
              filteredCourse[key as keyof Course] = courseData[key as keyof Course];
            }
          });
    
          return filteredCourse;
        });
        state.customCard = selectedCoursesById;
      }
    
      if (typeof id !== 'number') {
        const selectedCourses = state.courses.map((courseData) => {
          const filteredCourse: Record<keyof Course, any> = {} as Record<keyof Course, any>;
    
          keepKeys.forEach((key) => {
            if (typeof key === 'string' && key.includes('.')) {
              filteredCourse[key.split('.')[0] as keyof Course] = getValueByPath(courseData, key);
            } else {
              filteredCourse[key as keyof Course] = courseData[key as keyof Course];
            }
          });
    
          return filteredCourse;
        });
        state.selectedCourse = selectedCourses;
      }
    },
    
    
    
    sliceFirstFiveCourses: (state) => {
      state.selectedCourse = state.selectedCourse.slice(0, 5);
    },
    sliceBenefites : (state,action) =>{
      const { count } = action.payload;
      state.fewBenefite= state.benefitesData.slice(0,count)
    }
  
  },
});

export const { showSomeCourse, sliceFirstFiveCourses ,  sliceBenefites } = courseSlice.actions;

// ------------------------------------
// Pricing Slice
// ------------------------------------
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
// 

// ------------------------------------
// Export Reducers
// ------------------------------------
export const courseReducer = courseSlice.reducer;
export const pricingReducer = pricingSlice.reducer;
