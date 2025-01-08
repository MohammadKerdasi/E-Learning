import { useDispatch, useSelector } from "react-redux";
import { Course } from "./../../interfaces"; 
import { useEffect } from "react";
import { showSomeCourse, sliceFirstFiveCourses } from "../../redux/slice";
import { RootState } from "../../redux/store";
import CoursesCardsMK from "../CoursesCardsMK/CoursesCardsMK";
import { useNavigate } from "react-router-dom";

export default function CoursesPageLM() {
  const selectedCourses = useSelector((state: RootState) => state.courses.selectedCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSomeCourse({ keepKeys: ['image', 'description', 'category', 'name', 'title', 'btn', 'id', 'coursePageData', 'CoursePageImg',`coursePageDataUl`] }));
    dispatch(sliceFirstFiveCourses())
    console.log(selectedCourses);
    ;  
  }, [dispatch]);
  const navigate = useNavigate()
  function handleNavigateLK(id:number) {
    navigate(`/OpenPage/${id}`);
  }
  return (
    <div className="py-13 lg:py-25">
      <div className="grid grid-cols-1 gap-7.5 pt-10 lg:pt-15 desktop:pt-20">
        {selectedCourses.map((course: Course) => (
          <div key={course.id}  onClick={()=>handleNavigateLK(course.id)}>
            <CoursesCardsMK course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}