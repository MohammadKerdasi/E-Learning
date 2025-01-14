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
    <>
      <HeadlineNM data={dataHaedPricingNA} />
      <div className="px-4 lg:px-20 desktop:px-40">
        <PricingTabsNA categories={categories} className="m-auto w-fit mb-12.5"/>

        <div className="flex justify-between px-5-80 py-20 gap-7.5 bg-white rounded-xl max-md:flex-wrap">
          {filteredPricingCards.map((item, i: number) => (
            <PricingCardNA key={i} pricing={item} />
          ))}
        </div>

      <QuestionsSection />

      </div>
    </>
  );
}
