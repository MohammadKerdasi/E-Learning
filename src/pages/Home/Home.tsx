import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import imgVideo from "../../assets/images/home/section2/teamwork.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import VideoSection from "../../components/VideoSection/VideoSection";
import OurCoursesLM from "../../components/OurCoursesLM/OurCoursesLM";
import PricingSection from "../../components/PricingSection/PricingSection";

export default function Home() {
  return (
    <div className="px-4 lg:px-20 desktop:px-40">
      <HomeHero />
      <div className="mb-paddingBottom50 
        lg:mb-paddingBottom100 desktop:mb-paddingBottom150
        mt-30px lg:mt-20 desktop:mt-100px">
        <VideoSection img={imgVideo} alt="teamwork" />
      </div>
      <OurCoursesLM />
      <PricingSection />
      <QuestionsSection />
    </div>
  );
}
