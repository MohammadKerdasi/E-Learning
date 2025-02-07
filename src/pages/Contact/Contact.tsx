import SubmissionsTable from "../../components/SectionFormContactNM/SubmissionsTable";
import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import SectionFormContactNM from "../../components/SectionFormContactNM/SectionFormContactNM";
import { dataHaedLineNm } from '../../data/dataHeadlineNM'
export default function Contact() {
  return (
    <div className="max-w-2000 m-auto">
      <HeadlineNM data={dataHaedLineNm} />
      <SectionFormContactNM />
      {/* For testing without responsive design */}
        <SubmissionsTable />  
    </div>
  )
}