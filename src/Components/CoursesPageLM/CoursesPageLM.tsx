import { useDispatch, useSelector } from "react-redux";
import { Course } from "./../../interfaces"; 
import { useEffect } from "react";
import { showSomeCourse, sliceFirstFiveCourses } from "../../redux/slice";
import { RootState } from "../../redux/store";
import CoursesCardsMK from "../CoursesCardsMK/CoursesCardsMK";

export default function CoursesPageLM() {
  const selectedCourses = useSelector((state: RootState) => state.courses.selectedCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSomeCourse({ keepKeys: ['image', 'description', 'category', 'name', 'title', 'btn', 'id', 'coursePageData', 'CoursePageImg'] }));
    dispatch(sliceFirstFiveCourses()); 
  }, [dispatch]);

  return (
    <div className="pb-13 lg:pb-25">
      <div className="grid grid-cols-1 gap-7.5">
        {selectedCourses.map((course: Course) => (
          <CoursesCardsMK key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}