import { Pricing } from "../../interfaces";
import x from "./../../assets/images/home/our-pricing/icon/Union.svg";
import check from "./../../assets/images/home/our-pricing/icon/Vector (Stroke).svg";

const PricingCardNA = ({ pricing }: { pricing: Pricing }) => {
  return (
    <div className="bg-White/99 p-7.5 pt-12.5 w-[703px] border-White/95 border rounded-xl">
      <h2 className="w-full text-center bg-Orange/97 border border-Orange/90 rounded-md text-1.5xl capitalize py-3 font-medium">
        {pricing.plan}
      </h2>
      <p className="text-center text-7.5xl font-semibold py-2.5">
        ${pricing.price}
        <span className="text-xl font-medium text-Grey/30">/month</span>
      </p>

      <div className=" bg-white border border-White/95 pt-10">
        <div className="px-10 flex flex-col items-center">
          <h4 className="font-medium text-xl capitalize mb-7.5 ">
            Available features
          </h4>
          <ul className="flex flex-col items-center px-7 gap-y-5 mb-10 w-full">
            {pricing.features.map((feature, i) => {
              return (
                <li
                  key={i}
                  className="flex gap-3 items-center border border-White/95 p-3.5 rounded-md text-lg text-Grey/30 w-full"
                >
                  <div
                    className={`flex justify-center items-center w-8 h-8 rounded-md ${
                      feature.availability
                        ? "bg-Orange/95"
                        : "border border-White/95"
                    }`}
                  >
                    {
                      <img
                        src={feature.availability ? check : x}
                        alt="availability"
                      />
                    }
                  </div>
                  {feature.text}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="bg-Orange/50 w-full font-semibold text-lg capitalize text-white py-5 rounded-b-lg hover:bg-black transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCardNA;
