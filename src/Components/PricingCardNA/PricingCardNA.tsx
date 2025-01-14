import { Pricing } from "../../interfaces";
import x from "./../../assets/images/home/our-pricing/icon/Union.svg";
import check from "./../../assets/images/home/our-pricing/icon/Vector (Stroke).svg";

const PricingCardNA = ({ pricing }: { pricing: Pricing }) => {
  return (
    <div className="bg-White/99 p-7.5 pt-12.5 w-2/4 border-White/95 border rounded-xl max-md:w-full max-lg:px-5 max-lg:w-[550px]">
      <h2 className="w-full text-center bg-Orange/97 border border-Orange/90 rounded-md text-1.5xl capitalize py-3 font-medium max-desktop:text-lg max-lg:text-base">
        {pricing.plan}
      </h2>
      <p className="text-center text-7.5xl font-semibold py-12.5 max-desktop:text-6xl max-lg:py-7.5">
        ${pricing.price}
        <span className="text-xl font-medium text-Grey/30 max-desktop:text-base">/month</span>
      </p>

      <div className=" bg-white border border-White/95 pt-10 max-lg:pt-5 rounded-xl">
        <div className="px-10 max-xl:px-5 flex flex-col items-center ">
          <h4 className="font-medium text-xl capitalize mb-7.5  max-lg:mb-5  max-desktop:text-lg">
            Available features
          </h4>
          <ul className="flex flex-col items-center px-5.5-30 gap-y-5 mb-10 w-full max-desktop:px-0">
            {pricing.features.map((feature, i) => {
              return (
                <li
                  key={i}
                  className="flex gap-3 items-center border border-White/95 p-3.5 rounded-md text-lg text-Grey/30 w-full max-1600:text-sm max-lg:p-3"
                >
                  <div
                    className={`flex justify-center items-center w-8 h-8 rounded-md max-desktop:w-6 max-desktop:h-6 ${
                      feature.availability
                        ? "bg-Orange/95"
                        : "border border-White/95"
                    }`}
                  >
                    {
                      <img
                        src={feature.availability ? check : x}
                        alt="availability"
                        className="max-desktop:w-2.7 max-desktop:h-2.3"
                      />
                    }
                  </div>
                  {feature.text}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="bg-Orange/50 w-full font-semibold text-lg capitalize text-white py-5 rounded-b-lg hover:bg-black transition-all duration-300 max-desktop:text-sm max-desktop:py-4.5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCardNA;
