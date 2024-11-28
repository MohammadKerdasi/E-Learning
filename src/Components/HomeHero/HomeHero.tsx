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
    className: 'bg-Orange/50 text-White/100 px-[26.5px]'
}

const data2 = {
    link: '/Pricing',
    textLink: 'View Pricing',
    className: 'border border-1 border-White/95'
}
export default function HomeHero() {
    return (
        <div className="desktop:text-lg h-screen 
        desktop:pt-174 lg:pt-142 sm:pt-154 flex 
        flex-col items-center justify-center">
            <HeroTitle />
            <div className="mt-5 mb-2.5">
                <H1 text="with Online Design and Development Courses." />
            </div>
            <p className="leading-27">
                Learn from Industry Experts and Enhance Your Skills.
            </p>
            <div className="flex gap-3 mt-60">
                <Button data={data1} />
                <Button data={data2} />
            </div>
            <div className="w-full mt-100px">
                <LogoSlider logos={logos} />
            </div>
        </div>
    )
}
