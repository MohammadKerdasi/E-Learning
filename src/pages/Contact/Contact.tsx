import HeadlineNM from "../../Components/ContactNM/HeadlineNM";
import SectionFormContactNM from "../../Components/SectionFormContactNM/SectionFormContactNM";
import { dataHaedLineNm } from '../../data/dataHeadlineNM'
export default function Contact() {
  return (
    <div className="mx-4 lg:mx-5 desktop:mx-[30px] 
    pt-paddingBottom50 lg:pt-20 desktop:pt-[109px]">
      <HeadlineNM data={dataHaedLineNm} />
      <SectionFormContactNM />
    </div>
  )
}
