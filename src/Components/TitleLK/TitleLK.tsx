
export default function TitleLK({text,fontSize}:{text:string , fontSize?:string}) {
  return (
    <div className={`font-semibold leading-11 lg:leading-12 desktop:leading-13 text-2.5xl lg:text-4.5xl desktop:text-5xl text-neutral-800 ${fontSize}`}>
    {text}
  </div>
  )
}
