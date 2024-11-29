export interface Course {
    id: string;
    title: string;
    name: string;
    duration: string;
    level: string;
    description: string;
    image: string;
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