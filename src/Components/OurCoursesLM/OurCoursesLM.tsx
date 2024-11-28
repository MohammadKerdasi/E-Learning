import { useSelector } from "react-redux";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import CourseCard from "../CourseCard";
import { Course } from "./../../interfaces"; 
import { RootState } from "../../redux/store";


export default function OurCoursesLM() {
  const courses = useSelector((state: RootState) => state.course.courses);
  return (
    <div>
      <HomeBasicLK varwidth='w-[73%]' text='Our Courses' par='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.' btn='View All'/>
      <div className="px-4 lg:px-20 desktop:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course:Course)=>{
          return(
            <CourseCard key={course.id} course={course} />
          )
        })}
      </div>
    </div>
        

    </div>
  )
}
