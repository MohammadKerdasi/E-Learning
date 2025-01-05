import { SocialIconsBox } from "../../interfaces";
import IconBoxNM from "./IconBoxNM";

export default function ContactBoxSocialNM({ data }: { data: SocialIconsBox }) {
    const { icons, text } = data;
    return (
        <div className="flex items-center flex-col gap-3.5 desktop:gap-5
        border-[1px] border-White/95 rounded-lg
        bg-White/99 px-30px py-[29px] lg:py-[29.75px] lg:px-30px
        desktop:py-[26.87px] text-sm lg:text-base desktop:text-lg
        leading-5.6 lg:leading-6 desktop:leading-27 text-Grey/30">
            <div className="flex gap-2.5 desktop:gap-3.5">
                {icons.map((icon, index: number) => (
                    <IconBoxNM
                        key={index}
                        src={icon.src}
                    />
                ))}
            </div>
            <p>{text}</p>
        </div>
    )
}
