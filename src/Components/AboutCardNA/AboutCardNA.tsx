import React from 'react'
import { AboutCardsProps } from '../../interfaces'

export const AboutCardNA = ({ aboutCardData }: { aboutCardData: AboutCardsProps }) => {
  return (
    <div className='p-12.5 w-[48%] bg-white rounded-xl max-desktop:p-10 max-md:w-full'>
        <div className='w-17 h-17 flex justify-center items-center rounded-lg border border-Orange/90 animate-border-gradient bg-Orange/97 max-desktop:w-14 max-desktop:h-14 '>
            <img src={aboutCardData.img} alt={aboutCardData.head} />
        </div>

        <h3 className='text-Grey/15 text-2xl font-medium mb-3.5 mt-7.5 max-desktop:text-xl max-desktop:mb-2.5 max-desktop:mt-6 max-lg:text-lg max-lg:mb-1.5'>
            {aboutCardData.head}
        </h3>
        <p className='text-lg text-Grey/35 max-desktop:text-base max-lg:text-sm'>
            {aboutCardData.desc}
        </p>
    </div>
  )
}
