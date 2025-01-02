import PricingCardNA from "../../components/PricingCardNA/PricingCardNA";
import { pricingCardsData } from "../../data/dataNa";
import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import imgVideo from "../../assets/images/home/section2/teamwork.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import VideoSection from "../../components/VideoSection/VideoSection";
import OurCoursesLM from "../../components/OurCoursesLM/OurCoursesLM";
import PricingSection from "../../Components/PricingSection/PricingSection";

export default function Home() {
  return (
    <div className="px-4 lg:px-20 desktop:px-40">
      <HomeHero />
      <VideoSection img={imgVideo} alt="teamwork" />
      <OurCoursesLM />
      <PricingSection/>
      <QuestionsSection />
    </div>
  );
}
