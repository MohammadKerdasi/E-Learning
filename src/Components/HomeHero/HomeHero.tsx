import Button from "./Button";
import HeroTitle from "./HeroTitle";
import H1 from "./H1";
import zapier from '../../assets/images/home/hero/image/zaper.svg'
import spotify from '../../assets/images/home/hero/image/spotify.svg'
import zoom from '../../assets/images/home/hero/image/zoom.svg'
import amazon from '../../assets/images/home/hero/image/amazon.svg'
import adope from '../../assets/images/home/hero/image/adope.svg'
import notion from '../../assets/images/home/hero/image/notion.svg'
import netflex from '../../assets/images/home/hero/image/netflex.svg'
import LogoSlider from "../BrandLogoSlider/BrandLogoSlider";
const logos = [
    zapier, spotify, zoom, amazon, adope, notion, netflex
]

const data1 = {
    link: '/Courses',
    textLink: 'Explore Courses',
    className: 'bg-Orange/50 text-White/100 w-154 desktop:w-[195px]'
}

const data2 = {
    link: '/Pricing',
    textLink: 'View Pricing',
    className: 'border border-1 border-White/95 w-[127px] desktop:w-[159px] bg-White/100'
}
export default function HomeHero() {
    return (
        <div className="max-w-largeScreen m-auto desktop:text-lg h-max desktop:h-screen 
        desktop:pt-[274px] lg:pt-[222px] pt-[204px] flex 
        flex-col items-center justify-center">
            <HeroTitle />
            <div className="mt-4 desktop:mt-5 mb-1.5 desktop:mb-2.5">
                <H1 text="with Online Design and Development Courses." />
            </div>
            <p className="leading:[21px] desktop:leading-27 text-center">
                Learn from Industry Experts and Enhance Your Skills.
            </p>
            <div className="flex gap-3 mt-[50px] desktop:mt-60">
                <Button data={data1} />
                <Button data={data2} />
            </div>
            <div className="w-full mt-30px lg:mt-100px">
                <LogoSlider logos={logos} />
            </div>
        </div>
    )
}
