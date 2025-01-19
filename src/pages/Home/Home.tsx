import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import imgVideo from "../../assets/images/home/section2/teamwork.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import VideoSection from "../../components/VideoSection/VideoSection";
import OurCoursesLM from "../../components/OurCoursesLM/OurCoursesLM";
import BenefitsLK from "../../components/BenefitsLK/BenefitsLK";
import PricingSection from "../../components/PricingSection/PricingSection";
import TestimonialsLKHH from "../../components/TestimonialsLK+HH/TestimonialsLK+HH";


export default function Home() {
  return (
    <div className="px-4 lg:px-20 desktop:px-40 max-w-2000 m-auto ">
      <HomeHero  pargraph="Learn from Industry Experts and Enhance Your Skills."/>
      <div className="my-10 lg:my-20 desktop:my-25">
        <VideoSection img={imgVideo} alt="teamwork" />
      </div>
      <BenefitsLK/>
      <OurCoursesLM />
      <TestimonialsLKHH/> 
      <PricingSection />
      <QuestionsSection />
    </div>
  );
}
