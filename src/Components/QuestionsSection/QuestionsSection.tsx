import { accordionData } from "../../data/dataNa";
import AccordionListNA from "../AccordionListNA/AccordionListNA";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";

const QuestionsSection = () => {
  return (
    <section className="flex justify-center items-start bg-white my-100px px-5-80 py-20 gap-29 max-md:flex-wrap rounded-xl max-lg:flex-wrap max-desktop:gap-20">
        <HomeBasicLK text="Frequently Asked Questions" par="Still you have any questions? Contact our Team via support@skillbridge.com" btn="See All FAQ’s" varwidth="w-[408px]  max-lg:w-full" />
         <AccordionListNA accordions={accordionData} />
    </section>
  );
};

export default QuestionsSection;
