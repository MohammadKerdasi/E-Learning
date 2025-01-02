// mohammad ________________________________________________________________________________________
export interface Course {
  id: string;
  title: string;
  name: string;
  category: Category[];
  description: string;
  image: string;
  btn:string;
}
export interface DataPropsVideoSection {
  img: string;
  alt: string;
}
export interface DataPropsButton {
  link: string;
  textLink: string;
  className?: string;
}
export interface DataPropsButtonIcon {
  icon: string;
  className?: string;
  classNameIcon?: string;
}
export interface DataPropsDynamicTitle {
  orangeText: string;
  blackText: string;
}

// nahla ________________________________________________________________________________________
export interface Pricing {
  plan: string;
  price: number;
  category?: string;
  features: {
    text: string;
    availability: boolean;
  }[];
}

export interface Accordion {
  question: string;
  answer: string;
  id: number;
}

export interface AccordionNAProps {
  accordion: Accordion;
  isOpen: boolean;
  onToggle: () => void;
}

export interface AccordionListProps {
  accordions: Accordion[];
}

export interface PricingTabsNAProps {
  categories: string[];
}






interface Category{
  id:number,
  name:string
}
export interface BasicHome{
  text:string,
  par:string,
  btn?:string,
  varwidth:string
}
export interface TopBanner 
{
    text1: string;
    text2 : string;
    img1 : string;
    img2 : string;
}
export interface navProps
{
  logo : string;
  navData: navData[]

}
interface navData{
  path : string;
  text : string;
}

export interface footerData
{
  copyRight: string;
  logo : string
  Info : footerInfo[]
  Section : footerS[]
  Socila : Socila[]
}
interface footerInfo 
{
  icon : string;
  text: string;
}
interface footerS 
{
  title : string;
  path : string;
  li : Array<string>;
}

interface Socila 
{
  title : string;
  icon : Array<string>;
}