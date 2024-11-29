// mohammad ________________________________________________________________________________________
export interface Course {
  id: string;
  title: string;
  name: string;
  duration: string;
  level: string;
  description: string;
  image: string;
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
