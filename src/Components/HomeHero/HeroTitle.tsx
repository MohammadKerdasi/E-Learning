import ButtonIcon from "./ButtonIcon";
import DynamicTitle from "./DynamicTitle";
import icon from '../../assets/images/home/hero/icon/ligh-tning.svg'
import abstractLine from '../../assets/images/home/hero/icon/AbstractLine.svg'

export default function HeroTitle() {
    return (
        <div className="h-[100px] mx-[55.5px] flex gap-5px pl-5 pr-[30px] 
        py-3.5 border border-1 border-White/95 rounded-[11px] 
        bg-White/99 relative">
            <ButtonIcon icon={icon} className="bg-Orange/95" />
            <DynamicTitle orangeText="Unlock"
                blackText="Your Creative Potential"
            />
            <img src={abstractLine} alt="icon before"
                className="absolute -top-7 -left-7"
            />
        </div>
    )
}
