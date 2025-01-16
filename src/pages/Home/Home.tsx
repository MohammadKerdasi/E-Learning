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
    <div className="px-4 py-10 lg:p-20 desktop:py-paddingBottom150 lg:px-20 desktop:px-40">
      <HomeHero />
      <VideoSection img={imgVideo} alt="teamwork" />
      <BenefitsLK/>
      <OurCoursesLM />
      <TestimonialsLKHH/>
      <PricingSection />
      <QuestionsSection />
    </div>
  );
}
