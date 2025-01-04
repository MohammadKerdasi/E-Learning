import PricingCardNA from "../../components/PricingCardNA/PricingCardNA";
import { pricingCardsData } from "../../data/dataNa";
import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import imgVideo from "../../assets/images/home/section2/teamwork.png";
import HomeHero from "../../components/HomeHero/HomeHero";
import VideoSection from "../../components/VideoSection/VideoSection";
import OurCoursesLM from "../../components/OurCoursesLM/OurCoursesLM";
import BenefitsLK from "../../components/BenefitsLK/BenefitsLK";


export default function Home() {
  

  return (
   <div className="px-4 lg:px-20 desktop:px-40">
      <HomeHero />
      <VideoSection img={imgVideo} alt="teamwork" />
      <BenefitsLK/>
    <OurCoursesLM/>

      {/* <div className="flex justify-between bg-between p-20 gap-7.5">
        {pricingCardsData.map((item, i) => {
          return <PricingCardNA key={i} pricing={item} />;
        })}
      </div>
      <QuestionsSection /> */}
   </div>
  );
}
