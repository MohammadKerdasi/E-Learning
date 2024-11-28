import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store/index';
import CourseCard from './../../components/CourseCard';

export default function Home() {
  const courses = useSelector((state: RootState) => state.course.courses);

  console.log(courses);

  return (
    <div className="px-4 lg:px-5 desktop:px-7.5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
