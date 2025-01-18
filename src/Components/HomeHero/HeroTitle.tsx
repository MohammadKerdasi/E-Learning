import icon from '../../assets/images/home/hero/icon/ligh-tning.svg'
import abstractLine from '../../assets/images/home/hero/icon/AbstractLine.svg'
import ButtonIcon from './ButtonIcon'
import DynamicTitle from './DynamicTitle'


export default function HeroTitle() {
    return (
        <div className="h-[76px] lg:h-[78px] desktop:h-25 
        lg:mx-[55.5px] mx-0 ml-[1px] flex gap-2.5 px-3.5 lg:pl-3 
        lg:pr-6 desktop:pl-5 desktop:pr-7.5 
        py-3.5 border-[1px] border-White/95 rounded-[11px] 
        bg-White/99 relative">
            <ButtonIcon icon={icon} className="bg-Orange/95" />
            <DynamicTitle orangeText="Unlock"
                blackText="Your Creative Potential"
            />
            <img src={abstractLine} alt="icon before"
                className="absolute sm:-top-7 sm:-left-7 -left-3 -top-4"
            />
        </div>
    )
}
