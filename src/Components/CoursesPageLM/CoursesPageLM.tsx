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
    dispatch(showSomeCourse({ keepKeys: ['coursePageImgs', 'description', 'category', 'name', 'title', 'btn', 'id', 'coursePageData', 'CoursePageImg','coursePageDataUl.num,desc'] }));
    dispatch(sliceFirstFiveCourses())
    console.log(selectedCourses);
    
    ;  
  }, [dispatch]);
  const navigate = useNavigate()
  function handleNavigateLK(id:number) {
    navigate(`/OpenPage/${id}`);
  }
  return (
    <div className="pb-13 lg:pb-25">
      <div className="grid grid-cols-1 gap-7.5">
        {selectedCourses.map((course: Course) => (
          <div key={course.id}  onClick={()=>handleNavigateLK(course.id)}>
            <CoursesCardsMK course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}