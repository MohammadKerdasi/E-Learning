import { accordionData } from "../../data/dataNa";
import AccordionListNA from "../AccordionListNA/AccordionListNA";

const QuestionsSection = () => {
  return (
    <div>
         <AccordionListNA accordions={accordionData} />
    </div>
  );
};

export default QuestionsSection;
