import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PricingTabsNAProps } from "../../interfaces";
import { filterPricingCardsByCategory } from "../../redux/slice";
import { RootState } from "../../redux/store";

const PricingTabsNA: React.FC<PricingTabsNAProps> = ({ categories }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: RootState) => state.pricing.selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    dispatch(filterPricingCardsByCategory(category)); 
  };

  return (
    <div className="flex p-3 bg-white rounded-lg">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-7.5 py-3.5 rounded-md border-0 text-lg font-medium capitalize transition-all duration-300 max-desktop:text-sm max-desktop:px-6 max-desktop:py-3  ${
            selectedCategory === category
              ? "bg-Orange/50 text-white"
              : "bg-white text-Grey/30"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PricingTabsNA;
