import { useSelector } from "react-redux";
import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import PricingTabsNA from "../../components/PricingTabsNA/PricingTabsNA";
import { RootState } from "../../redux/store";
import PricingCardNA from "../../components/PricingCardNA/PricingCardNA";
import QuestionsSection from "../../components/QuestionsSection/QuestionsSection";
import { dataHaedPricingNA } from "../../data/dataNa";

export default function Pricing() {
  const categories = ["monthly", "yearly"];
  const filteredPricingCards = useSelector(
    (state: RootState) => state.pricing.filteredPricingCards
  );
  return (
    <div className="pb-10 lg:pb-20 desktop:pb-paddingBottom150 max-w-2000 m-auto">
      <HeadlineNM data={dataHaedPricingNA} />
      <div className="px-4 lg:px-20 desktop:px-40">
        <PricingTabsNA categories={categories} className="m-auto w-fit mb-12.5 max-md:mb-10"/>

        <div className="flex justify-between px-5-80 py-20 gap-7.5 bg-white rounded-xl max-1250:flex-wrap max-1250:justify-center max-desktop:py-12.5 max-sm:p-5">
          {filteredPricingCards.map((item, i: number) => (
            <PricingCardNA key={i} pricing={item} />
          ))}
        </div>

      <QuestionsSection />

      </div>
    </div>
  );
}
