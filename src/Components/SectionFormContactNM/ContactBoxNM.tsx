import { dataSocialBox } from "../../data/dataConatctBoxNM";
import { ContactBox } from "../../interfaces";
import ContactBoxSocialNM from "./ContactBoxSocialNM";
import IconBoxNM from "./IconBoxNM";

export default function ContactBoxNM({ boxes }: { boxes: ContactBox[] }) {
    return (
        <div>
            {boxes.map((box, index: number) => (
                <a href={box.href}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center flex-col gap-3.5 desktop:gap-5
                    border-[1px] border-White/95 rounded-lg
                    bg-White/99 px-30px py-[29px] lg:py-[29.75px] lg:px-30px
                    desktop:py-[26.87px] text-sm lg:text-base desktop:text-lg
                    leading-5.6 lg:leading-6 desktop:leading-27 text-Grey/30
                    mb-5 lg:mb-6 desktop:mb-paddingBottom50">
                    <IconBoxNM src={box.icon} />
                    {box.text}
                </a>
            ))}
            <ContactBoxSocialNM data={dataSocialBox}/>
        </div>
    )
}
