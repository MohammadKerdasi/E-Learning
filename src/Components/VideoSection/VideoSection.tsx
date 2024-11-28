import iconPlay from '../../assets/images/home/section2/iconPlay.svg'
import {DataPropsVideoSection} from '../../interfaces'
export default function VideoSection({ img, alt }: DataPropsVideoSection) {
    return (
        <div className="relative mb-paddingBottom150">
            <img src={img} alt={alt} className="w-full 
            rounded-xl mx-0.5 sm:h-[247px] lg:h-[649px] desktop:h-[790px]
             object-cover"/>
            <div className='absolute h-72px
            w-72px flex items-center justify-center 
            top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2
            border-[6px]  border-[#FFFFFF4D]
            bg-[#FFFFFF33] rounded-full'
            >
                <img src={iconPlay} alt="Icon Play" />
            </div>
        </div>
    )
}
