import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store/index';
import CourseCard from './../../components/CourseCard';
import imgVideo from '../../assets/images/home/section2/teamwork.png' 
import HomeHero from '../../components/HomeHero/HomeHero';
import VideoSection from '../../components/VideoSection/VideoSection';

export default function Home() {
  const courses = useSelector((state: RootState) => state.course.courses);

  console.log(courses);

  return (
    <div className="px-4 lg:px-20 desktop:px-40">
      <HomeHero />
      <VideoSection  img={imgVideo} alt="teamwork"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
