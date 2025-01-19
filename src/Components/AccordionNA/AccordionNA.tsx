import { useEffect, useRef } from "react";
import { Accordion, AccordionNAProps } from "../../interfaces";
import x from "./../../assets/images/home/our-pricing/icon/Union.svg";
import more from "./../../assets/images/home/questions/icon/moreArrow.svg";

const AccordionNA = ({ accordion, isOpen, onToggle }: AccordionNAProps) => {
  const accordionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            if (entry.isIntersecting) {
              entry.target.classList.add("-translate-y-6");
            } else {
              entry.target.classList.remove( "-translate-y-6");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        observer.unobserve(accordionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      className="transition-all duration-700 ease-in-out border border-White/95 p-12.5 max-desktop:p-10 rounded-xl max-md:p-6 gap-2"
    >
      <div
        className={`flex justify-between items-center cursor-pointer ${
          isOpen ? "border-b border-White/95 pb-8" : ""
        }`}
        onClick={onToggle}
      >
        <h3 className="text-xl font-medium capitalize max-2xl:text-lg w-10/12 max-lg:text-base max-sm:w-[68%]">
          {accordion.question}
        </h3>

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
        <p className="text-Grey/30 capitalize text-lg py-12.5 max-desktop:py-10 max-2xl:text-base max-lg:text-sm max-md:py-5">
          {accordion.answer}
        </p>
        <div className="bg-White/95 rounded-lg flex justify-between items-center px-7.5 py-8.5 gap-3 max-lg:py-3 max-md:px-5  max-desktop:py-7 max-desktop:px-6">
          <p className="text-lg font-medium max-2xl:text-base w-10/12 max-lg:text-sm">
            Enrollment Process for Different Courses
          </p>

          <div className="bg-white w-14 h-14 flex items-center justify-center rounded-full max-md:w-10 max-md:h-10">
            <img src={more} alt="checkForMore" className="max-md:w-2.5 max-md:h-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionNA;
