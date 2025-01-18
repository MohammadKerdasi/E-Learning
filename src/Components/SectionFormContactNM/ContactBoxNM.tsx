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
                    className="flex items-center flex-col gap-3.5 2xl:gap-5
                    border-[1px] border-White/95 rounded-lg
                    bg-White/99 px-7.5 py-[29px] xl:py-[29.75px] 2xl:px-7.5
                    2xl:py-[26.87px] text-sm xl:text-base 2xl:text-lg
                    leading-5.6 xl:leading-6 2xl:leading-6.5 text-Grey/30
                    mb-5 xl:mb-6 2xl:mb-12.5 text-center">
                    <IconBoxNM src={box.icon} />
                    {box.text}
                </a>
            ))}
            <ContactBoxSocialNM data={dataSocialBox}/>
        </div>
    )
}
