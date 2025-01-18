import { DataPropsVideoSection } from '../../interfaces'
import IconPlay from './IconPlay'

export default function VideoSection({ img, alt }: DataPropsVideoSection) {
    return (
        <div className="max-w-largeScreen m-auto relative">
            <img src={img} alt={alt} className="w-full 
            rounded-xl desktop:mx-0.5 h-[247px] lg:h-[649px] desktop:h-[790px]
             object-cover mx-0"/>
            <IconPlay />
        </div>
    )
}
