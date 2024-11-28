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
}
export interface DataPropsDynamicTitle {
  orangeText: string;
  blackText: string;
}