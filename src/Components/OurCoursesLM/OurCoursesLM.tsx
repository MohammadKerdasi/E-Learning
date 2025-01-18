import { useDispatch, useSelector } from "react-redux";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import CourseCard from "./CourseCard";
import { Course } from "./../../interfaces";
import { useEffect } from "react";
import { showSomeCourse } from "../../redux/slice";
import { RootState } from "../../redux/store";

export default function OurCoursesLM() {
  const selectedBlogs = useSelector(
    (state: RootState) => state.courses.selectedCourse
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showSomeCourse({
        keepKeys: [
          "image",
          "description",
          "category",
          "name",
          "title",
          "btn",
          "coursePageImgs.src1" ,
          "id",
        ],
      })
    );
    console.log(selectedBlogs);
    
  },[dispatch]);
  
  return (
    <div className="py-10 lg:py-20 desktop:py-25">
      <HomeBasicLK
        varwidth="w-full md:w-[73%]"
        text="Our Courses"
        par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        btn="View All"
        href={`/Courses`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7.5 pt-10 lg:pt-15 desktop:pt-20">
        {selectedBlogs.map((course: Course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
}
