import { items, lessonsLK } from "../../interfaces";
import TitleAsNumber from "../BenefitsLK/TitleAsNumber";
import TitleH3 from "../BenefitsLK/TitleH3";
import hour from './../../assets/images/open-page/custom-course/icon/clock.svg'

export default function CardOpenPage({card}: {card:items}) {
  return (
    <div className="bg-white rounded-xl p-7.5 lg:p-[6.35%] 1600:p-12.5">
      <TitleAsNumber numberB={card.num} />
      <div className="py-7.5 lg:py-10 1600:py-12.5">
        <TitleH3 title={card.desc} />
      </div>
      <div className="flex flex-col justify-between gap-5">
        {card.lessons.map((lessons : lessonsLK, un:number) => {
        const isConditionMet = card.id === 1 && lessons.id === 2;
        return (
          <div key={un} className={`w-full flex justify-start sm:justify-between gap-y-6 sm:items-center flex-col sm:flex-row p-[24px] lg:px-[4.364%] lg:py-5 1600:px-7.5 1600:py-6 rounded-md border ${isConditionMet ? 'border-Orange/80 shadow-videoLK' : 'border-White/97'}`}>
            <div className="w-full sm:w-[67%]">
              <h3 className="text-base font-medium desktop:text-xl desktop:leading-7.5 text-Grey/20 pb-1.5">{lessons.title}</h3>
              <h5 className="desktop:text-lg desktop:leading-6.5 font-normal text-sm text-Grey/35">{lessons.lessonNum}</h5>
            </div>
            <div className={`flex justify-center items-center gap-0.5 w-max whitespace-nowrap p-2.5 rounded-md ${isConditionMet ? 'bg-Orange/90' : ' bg-White/97'}`}>
              <img className="w-5 1600:w-6" src={hour} />
              <span className="1600:text-lg desktop:leading-5.5 font-normal text-sm text-Grey/35">{lessons.duration}</span>
            </div>
          </div>
        )
      })}</div>
    </div>
  )
}
