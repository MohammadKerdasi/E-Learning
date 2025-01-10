import { parCommon } from "../../interfaces";

export default function PargraphCommonLK({par,changeColor}: parCommon) {
  return (
    <div className={`text-sm leading-[21px] lg:text-base desktop:text-lg desktop:leading-6.5 ${changeColor ? 'text-Grey/35' : 'text-Grey/30'} font-normal`}>{par}</div>
  )
}
