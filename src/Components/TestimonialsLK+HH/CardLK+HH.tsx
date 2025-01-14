import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import girl from './../../assets/images/home/our-testimonials/sarah.png'

export default function CardLKHH() {
  return (
    <div className='border rounded-[10px]'>
        <div className='p-7.5 lg:p-[40px] desktop:p-12.5 bg-white rounded-t-[10px]'>
            <PargraphCommonLK par="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"/>
        </div>
        <div className="border-t rounded-b-[10px] px-7.5 py-5 lg:px-[40px] lg:py-6 desktop:px-12.5 desktop:py-7.5 bg-White/99 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2.5 desktop:gap-[15px]">
        <img src={girl} alt=""/>
        <p className="font-semibold md:text-base desktop:text-lg text-neutral-800">
        Sarah L
        </p>
        </div>
        <button className="bg-White/97 px-4 py-[14px] desktop:px-6 desktop:py-4.5 border border-White/95 rounded-md  desktop:rounded-lg font-medium text-sm text-Grey/15 desktop:text-lg">
        Read Full Story

        </button>

        </div>

    </div>
  )
}
