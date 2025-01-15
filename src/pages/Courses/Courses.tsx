import HeadlineNM from "../../components/ContactNM/HeadlineNM";
import CoursesPageLM from "../../components/CoursesPageLM/CoursesPageLM";
import { dataHaedLinemk } from '../../data/dataHeadlineNM'


export default function Courses() {
  return (
    <>
      <HeadlineNM data={dataHaedLinemk} />
    <div className="px-4 lg:px-20 desktop:px-40 desktop:pt-[100px] laptop:pt-[80px] pt-[50px]">
      <CoursesPageLM/>
    </div>
    </>
  )
}
