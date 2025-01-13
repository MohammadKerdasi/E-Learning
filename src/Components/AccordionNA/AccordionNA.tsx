import { Accordion, AccordionNAProps } from "../../interfaces";
import x from "./../../assets/images/home/our-pricing/icon/Union.svg";
import more from "./../../assets/images/home/questions/icon/moreArrow.svg";

const AccordionNA = ({ accordion, isOpen, onToggle }: AccordionNAProps) => {
  return (
    <div className="border border-White/95 py-10 px-12.5 rounded-xl max-lg:px-6 max-lg:py-5 gap-2 max-lg:w-[550px]">
      <div
        className={`flex justify-between items-center  cursor-pointer  ${
          isOpen ? "border-b border-White/95 pb-8" : ""
        }`}
        onClick={onToggle}
      >
        <h3 className="text-xl font-medium capitalize max-2xl:text-lg w-10/12 max-lg:text-base">{accordion.question}</h3>

        <div className="flex justify-center items-center w-13 h-13 rounded-md bg-Orange/95 max-2xl:w-11 max-2xl:h-11">
          <img
            src={x}
            alt="close"
            className={`${
              isOpen ? "" : "rotate-45"
            } transition-transform duration-300`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <p className="text-Grey/30 capitalize text-lg py-12.5 max-2xl:text-base max-lg:text-sm">
          {accordion.answer}
        </p>
        <div className="bg-White/95 rounded-lg flex justify-between items-center px-7.5 py-8.5 gap-3  max-lg:py-3">
          <p className="text-lg font-medium max-2xl:text-base w-10/12 max-lg:text-sm">
            Enrollment Process for Different Courses
          </p>

          <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full">
            <img src={more} alt="checkForMore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionNA;
