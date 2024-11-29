export interface Course {
    id: string;
    title: string;
    name: string;
    category: Category[];
    description: string;
    image: string;
    btn:string;
  }
interface Category{
  id:number,
  name:string
}
export interface BasicHome{
  text:string,
  par:string,
  btn:string,
  varwidth:string
}