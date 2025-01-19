import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import CoursesPageLM from "../../components/CoursesPageLM/CoursesPageLM";
import { dataHaedLinemk } from "../../data/dataHeadlineNM";

export default function Courses() {
  return (
    <div className="pb-10 lg:pb-20 max-w-2000 desktop:pb-paddingBottom150">
      <HeadlineNM data={dataHaedLinemk} />
      <div className="px-4 lg:px-20 desktop:px-40">
        <CoursesPageLM />
      </div>
    </div>
  )
}
