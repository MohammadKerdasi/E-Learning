import type { TopBanner } from "../../interfaces";

export default function TopBanner({text1 , text2 , img1 , img2} : TopBanner) {
  return (
    <div className=" font-primary flex-wrap  desktop:mt-5 mt-10 desktop:mx-7.5 lg:mx-5 lg:mt-5 mx-4 h-min  justify-center items-center flex  text-white rounded-lg bg-Orange/50 py-3.5 md:px-4">
        <span className='font-normal desktop:text-lg desktop:leading-27  text-sm leading-21 '>{text1}</span>
        <img className=' desktop:mx-1  desktop:h-auto h-[21px]' src={img1} alt="star"/> 
        <span className='font-normal desktop:text-lg desktop:leading-27 text-sm leading-21'>{text2}</span>
        <img className='desktop:ml-23  ml-3 desktop:h-6  desktop:w-6 w-5 h-5' src={img2} alt="arrow" />
    </div>
  )
}

