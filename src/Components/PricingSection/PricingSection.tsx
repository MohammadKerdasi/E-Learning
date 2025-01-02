import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PricingTabsNA from "../PricingTabsNA/PricingTabsNA";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import PricingCardNA from "../PricingCardNA/PricingCardNA";
import { Pricing } from "../../interfaces";

const PricingSection = () => {
  const categories = ["monthly", "yearly"];

  const filteredPricingCards = useSelector(
    (state: RootState) => state.pricing.filteredPricingCards
  );

  return (
    <section>
      <div className="mb-20 mt-100px flex justify-between items-end max-md:flex-wrap max-md:justify-center gap-y-8">
        <HomeBasicLK
          text="Our Pricing"
          par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          varwidth="w-full md:w-[73%]"
        />
        <PricingTabsNA categories={categories} />
      </div>

      <div className="flex justify-between px-5-80 py-20 gap-7.5 bg-white rounded-xl max-md:flex-wrap">
        {filteredPricingCards.map((item: Pricing, i: number) => (
          <PricingCardNA key={i} pricing={item} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
