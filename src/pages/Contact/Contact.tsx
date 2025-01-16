import SubmissionsTable from "../../components/SectionFormContactNM/SubmissionsTable";
import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import SectionFormContactNM from "../../components/SectionFormContactNM/SectionFormContactNM";
import { dataHaedLineNm } from '../../data/dataHeadlineNM'
export default function Contact() {
  return (
    <div>
      <HeadlineNM data={dataHaedLineNm} />
      <SectionFormContactNM />
      {/* For testing without responsive design */}
        <SubmissionsTable />  
    </div>
  )
}
//py-10 lg:p-20 desktop:py-paddingBottom150