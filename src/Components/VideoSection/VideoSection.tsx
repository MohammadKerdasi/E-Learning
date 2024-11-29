import { DataPropsVideoSection } from '../../interfaces'
import IconPlay from './IconPlay'

export default function VideoSection({ img, alt }: DataPropsVideoSection) {
    return (
        <div className="max-w-largeScreen m-auto relative mb-paddingBottom50 
        lg:mb-paddingBottom100 desktop:mb-paddingBottom150
        mt-30px lg:mt-20 desktop:mt-100px"
        >
            <img src={img} alt={alt} className="w-full 
            rounded-xl desktop:mx-0.5 h-[247px] lg:h-[649px] desktop:h-[790px]
             object-cover"/>
            <IconPlay />
        </div>
    )
}
