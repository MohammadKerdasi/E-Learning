// mohammad ________________________________________________________________________________________
export interface Course {
  id: string;
  title: string;
  name: string;
  category: Category[];
  description: string;
  image: string;
  btn: string;
  coursePageData: CoursePageData[];

}
export interface CoursePageData {
  id: number;
  title: string;
  desc: string;
  btn: {
    view: string;
    href: string;
  };
  coursePageImgs : [
    {
      id : number,
      src : string,
    },
    {
      id : number,
      src : string,
    },
    {
      id : number,
      src : string,
    },
]
  secTitle: string;
  ul: items[];
}
export interface items {
  id: number;
  num: string;
  desc: string;
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
  onClick?:  () => void;
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
  className?: string;
  classTitle?: string;
  classPara?: string;
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
  defaultValue?: string | number;
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

interface Category {
  id: number;
  name: string;
}
export interface BasicHome {
  text: string;
  par: string;
  btn: string;
  varwidth: string;
  fontSize: string;
  flex? : string;
}
export interface TopBanner {
  text1: string;
  text2: string;
  img1: string;
  img2: string;
}
export interface navProps {
  logo: string;
  navData: navData[];
}
interface navData {
  path: string;
  text: string;
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
