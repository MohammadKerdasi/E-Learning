import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import CardLKHH from "../TestimonialsLK+HH/CardLK+HH";
import { dataTestmonialsLKHH } from "../../data/dataTestHH+LK";
import { fetchCardByIndex } from "../../redux/singleCardSlice";
import prev from '../../assets/images/sliderIcon/prev.png'
import next from '../../assets/images/sliderIcon/next.png'
import SliderButton from "./SliderButton";
export default function CustomSlider() {
  const dispatch = useDispatch<AppDispatch>();
  const currentCard = useSelector((state: RootState) => state.singleCard.card);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCardByIndex(currentIndex));
  }, [currentIndex, dispatch]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataTestmonialsLKHH.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataTestmonialsLKHH.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {currentCard && (
        <CardLKHH
          id={currentCard.id}
          par={currentCard.par}
          btn={currentCard.btn}
          theName={currentCard.theName}
          imag={currentCard.imag}
        />
      )}
      <div className=" flex lg:justify-end justify-center desktop:mt-7.5  desktop:gap-[15px] gap-2.5  lg:mt-6 mt-5 ">
        <SliderButton img={prev} onClick={handlePrev} />
        <SliderButton img={next} onClick={handleNext} />
      </div>
      
    </div>
  );
}
