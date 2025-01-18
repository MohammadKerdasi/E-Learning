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
import { data1, data2 } from "../../data/dataHomeHeroButtonsNM";
const logos = [
    zapier, spotify, zoom, amazon, adope, notion, netflex
]

export default function HomeHero() {
    return (
        <div className="max-w-largeScreen m-auto desktop:text-lg
        h-max desktop:pt-25 lg:pt-20 pt-10 flex 
        flex-col items-center justify-center">
            <HeroTitle />
            <div className="mt-4 desktop:mt-5 mb-1.5 desktop:mb-2.5">
                <H1 text="with Online Design and Development Courses." />
            </div>
            <p className="leading-5.6 desktop:leading-6.5 
            text-center text-Grey/15 mx-7.5 lg:mx-0">
                Learn from Industry Experts and Enhance Your Skills.
            </p>
            <div className="flex gap-3 mt-12.5 desktop:mt-15">
                <Button data={data1} />
                <Button data={data2} />
            </div>
            <div className="w-full mt-7.5 lg:mt-25">
                <LogoSlider logos={logos} />
            </div>
        </div>
    )
}