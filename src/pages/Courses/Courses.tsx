import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import CoursesPageLM from "../../components/CoursesPageLM/CoursesPageLM";
import { dataHaedLinemk } from '../../data/dataHeadlineNM'


export default function Courses() {
  return (
    <div className="px-4 lg:px-20 desktop:px-40 py-10 lg:p-20 desktop:py-paddingBottom150">
      <HeadlineNM data={dataHaedLinemk} />
      <CoursesPageLM/>
    </div>
  )
}
