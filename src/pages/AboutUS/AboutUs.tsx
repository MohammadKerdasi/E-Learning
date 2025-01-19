import { AboutCardNA } from "../../components/AboutCardNA/AboutCardNA";
import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import HomeBasicLK from "../../components/HomeBasicLK/HomeBasicLK";
import { JoinSectionNA } from "../../components/JoinSectionNA/JoinSectionNA";
import {
  achievementData,
  dataHaedAboutNA,
  goalData,
  joinData,
} from "../../data/dataNa";

export default function AboutUs() {
  return (
    <div className="max-w-2000 m-auto pb-25 max-desktop:pb-20 max-sm:pb-12.5">
      <HeadlineNM data={dataHaedAboutNA} />
      <div className="px-4 lg:px-20 desktop:px-40">
        <div className="pb-25 max-desktop:pb-20 max-md:pb-12.5">
          <HomeBasicLK
            text="Achievements"
            par="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
            varwidth="w-full"
          />
          <div className="flex gap-7.5 flex-wrap max-desktop:gap-5 mt-20 max-desktop:mt-15 max-lg:mt-12.5">
            {achievementData.map((item, i) => {
              return <AboutCardNA key={i} aboutCardData={item} />;
            })}
          </div>
        </div>

        <div className="pb-20 max-desktop:pb-15 max-md:pb-12.5">
          <HomeBasicLK
            text="Our Goals"
            par="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to"
            varwidth="w-full"
          />
          <div className="flex gap-7.5 flex-wrap max-desktop:gap-5 mt-20 max-desktop:mt-15 max-lg:mt-12.5">
            {goalData.map((item, i) => {
              return <AboutCardNA key={i} aboutCardData={item} />;
            })}
          </div>
        </div>

        <JoinSectionNA join={joinData} />
      </div>
    </div>
  );
}
