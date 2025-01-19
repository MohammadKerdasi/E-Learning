import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import { Course } from "./../../interfaces";

interface CourseCardProps {
  course: Course;
}

export default function CoursesCardsMK({ course }: CourseCardProps) {
  if (!course || !course.coursePageData || course.coursePageData.length === 0) {
    return <div>No data exist</div>;
  }

  return (
    <div className="bg-white rounded-lg desktop:p-[50px] laptop:p-[40px] p-[24px]">
      {course.coursePageData.map((data) => (
        <div key={data.id} className="mb-4">
          <HomeBasicLK
            varwidth="w-full md:w-[73%]"
            fontSize="desktop:!text-[24px] desktop:leading-36 desktop:pb-10 md:!text-[20px] md:leading-7.5 md:pb-6 leading-27 !text-18 pb-1"
            text={course.title}
            par={data.desc}
            btn={data.btn.view}
            flex="block my-auto mx-0"
          />
          <div className="grid grid-cols-3 desktop:gap-7.5 laptop:gap-[20px] gap-[10px]">
            {course.coursePageImgs ? (
              Object.values(course.coursePageImgs).map(
                (img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto desktop:my-7.5 my-[24px]"
                  />
                )
              )
            ) : (
              <p>No images available.</p>
            )}
          </div>
          <div className="flex justify-between items-center flex-wrap gap-[16px] w-full desktop:mb-50 mb-[40px]">
            <div className="flex justify-start items-center gap-2.5 ">
              {course.category.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="leading-4.5 desktop:leading-5.5 border border-White/95 rounded-lg px-4 py-2.5 text-Grey/30 font-normal text-sm desktop:text-lg"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <p className="font-medium text-base leading-5 desktop:text-xl desktop:leading-[25px] text-neutral-800">
              {course.name}
            </p>
          </div>
          <div className="flex flex-col border border-White/95 desktop:rounded-xl laptop:rounded-[10px] rounded-lg">
            {course.coursePageData.map((item, index) => (
              <div key={index}>
                <p className="py-[20px] px-7.5 font-semibold desktop:text-2xl border-b-2 border-white/95">
                  {item.secTitle}
                </p>
              </div>
            ))}
            <div className="flex desktop:justify-around justify-between flex-wrap desktop:flex-row laptop:flex-row flex-col w-full laptop:pt-[6px] laptop:pb-7.5 px-[24px] py-[24px]   ">
              {course.coursePageDataUl.map((item, index) => (
                <div
                  className="desktop:w-[17.5%] laptop:w-[170px] first:p-0 last:p-0 last:border-0 laptop:border-e laptop:border-e-white/95 laptop:border-b-1 border-b border-white/95 "
                  key={index}
                >
                  <div className="mx-auto my-0 desktop:pe-[50px] laptop:pe-[40px] py-[20px]  ">
                    <p className="desktop:text-[50px] laptop:text-[40px] text-[30px] font-extrabold desktop:mb-[20px] laptop:mb-[14px] mb-[12px]  ">
                      {item.num}
                    </p>
                    <p className="font-medium desktop:text-lg laptop:text-[16px] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
