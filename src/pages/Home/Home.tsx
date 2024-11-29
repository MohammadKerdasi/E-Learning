import { useSelector } from "react-redux";
import { RootState } from "./../../redux/store/index";
import CourseCard from "./../../components/CourseCard";
import PricingCardNA from "../../components/PricingCardNA/PricingCardNA";
import { pricingCardsData } from "../../data/dataNa";
import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import imgVideo from "../../assets/images/home/section2/teamwork.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import VideoSection from "../../components/VideoSection/VideoSection";

export default function Home() {
  const courses = useSelector((state: RootState) => state.course.courses);

  console.log(courses);

  return (
    <div className="px-4 lg:px-20 desktop:px-40">
      <HomeHero />
      <VideoSection img={imgVideo} alt="teamwork" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="flex justify-between bg-between p-20 gap-7.5">
        {pricingCardsData.map((item, i) => {
          return <PricingCardNA key={i} pricing={item} />;
        })}
      </div>
      <QuestionsSection />
    </div>
  );
}
