// mohammad ________________________________________________________________________________________
export interface Course {
  id: number;
  title : string;
  name: string;
  category: Category[];
  description: string;
  btn: string;
  coursePageData: CoursePageData[];
  coursePageDataUl : items[];
  coursePageImgs : {
      src1 : string,
      src2 : string,
      src3 : string,
  }

}
export interface CoursePageData {
  id: number;
  title: string;
  desc: string;
  btn: {
    view: string;
    href: string;
  };
  secTitle: string;
  
}
// lourina ___________________________________________________________________________________________
export interface lessonsLK{
    id: number,
    title: string,
    duration: string,
    lessonNum: string,
  
}

export interface items {
  id: number;
  num: string;
  desc: string;
  lessons :lessonsLK[]
}

interface Category {
  id: number;
  name: string;
}
export interface TitleInterface{
  text: string;
  fontSize?: string;
  adding?:string;
}
 export interface BasicHome {
  text: string;
  par: string;
  btn?: string;
  varwidth?: string;
  fontSize?: string;
  flex? : string;
  href?: string;
}

export interface datatest{
  id:number,
  par:string,
  imag:string,
  theName: string,
  btn:string
}

export interface benefit{
  id?:number,
  imag:string,
  numberB:string,
  title:string,
  par:string
}

export interface parCommon{
  changeColor?:boolean,
  par:string
 }
// Noura ________________________________________________________________________________________
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
export interface DataPropsHeadline {
  text: string;
  para: string;
}


export interface DataPropsInput {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  className?: string;
  classLabel?: string;
  classInput?: string;
  icon?: string;
  classIcon?: string;
  classParent?: string;
  onClickInput?:  (event: React.MouseEvent<HTMLInputElement>) => void;
  onClickIcon?:  (event: React.MouseEvent<HTMLImageElement>) => void;
  onClickTextarea?:  (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}  


export interface DataPropsButtonSubmit {
  textButton: string;
   classButtonSubmit?: string;
}   

export interface Submission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}  

export interface FormState {
  submissions: Submission[];
}  

export interface ContactBox {
  href:string;
  icon: string;
  text:string;
}  

export interface SocialIcons {
  src: string;
}  

export interface SocialIconsBox {
  icons: SocialIcons[];
  text:string;
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
export interface PricingTabsNAProps {
  categories: string[];
  className? : string
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

export interface AboutCardsProps {
  img: string,
  head: string,
  desc: string
}

export interface JoinProps {
  img: string;
  text: string;
  orangeText: string;
  desc: string;
  btn: string;
  link: string
}




// haneen ___________________________________________________________________________________
export interface TopBanner {
  text1: string;
  text2: string;
  img1: string;
  img2: string;
}
export interface navProps {
  logo: string;
  navData: navData[];
  className? : string;
}
interface navData {
  path: string;
  text: string;
}
export interface SideBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  navData: { path: string; text: string }[]; 
}

export interface formDataHH {
  title: string;
  p: string;
  data: DataPropsInput[];
  link?: string;
  dataBtn: DataPropsButtonSubmit;
  formType: "login" | "signup"; 
  labelCheck :  React.ReactNode;
  googleBtn : string;
  dataLink?: dataLinkHH[];

}
export interface LinkPropsHH 
{
    data?: dataLinkHH[]
    arrow: string;
}

export interface dataLinkHH
{
    linkPath: string;
    ptext: string;
    location: string;
}
export interface footerData {
  copyRight: string;
  logo: string;
  Info: footerInfo[];
  Section: footerS[];
  Socila: Socila[];
}
interface footerInfo {
  icon: string;
  text: string;
}
interface footerS {
  title: string;
  path: string;
  li: Array<string>;
}

interface Socila {
  title: string;
  icon: Array<string>;
}

export interface CardsState {
  cards: datatest[];
}

 export interface SingleCardState {
  card: CardsState | null; 
}

export interface SliderButtonProps
{
    onClick :() => void;
    img : string;
}
