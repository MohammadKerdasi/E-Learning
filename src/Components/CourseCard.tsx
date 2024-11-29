import { Course } from "./../interfaces"; 
import PargraphCommonLK from "./PargraphCommonLK/PargraphCommonLK";

interface CourseCardProps {
  course: Course; 
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 lg:p-10 desktop:p-13">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full object-cover"
      />
      <div className=''>
        <div className="py-6 desktop:py-7.5">
        <div className="flex flex-col gap-y-3.5 xl:flex-row justify-between xl:items-center mb-6 desktop:mb-7.5">
          <div className="flex justify-start items-center gap-2.5">
            {course.category.map((item,index)=>{
            return(
              <button key={index} className="leading-4.5 desktop:leading-5.5 border border-White/95 rounded-lg px-4 py-2.5 text-Grey/30 font-normal text-sm desktop:text-lg">{item.name}</button>

            )
          })}</div>
          <p className="font-medium text-base leading-5 desktop:text-xl desktop:leading-[25px] text-neutral-800">{course.name}</p>
        </div>
        <h3 className="text-lg lg:text-xl lg:leading-7.5 desktop:text-2xl desktop:leading-[36px] font-semibold mb-2.5 desktop:mb-3.5">{course.title}</h3>
        
        <PargraphCommonLK par={course.description}/> 
        </div>
        <button
          className="w-full py-3.5 desktop:py-4.5 rounded-lg bg-White/97 border border-White/95 text-neutral-800 font-medium text-sm desktop:text-lg leading-[21px] desktop:leading-6.5 hover:bg-neutral-800 hover:text-White/97 hover:border-White/97 ransition duration-500 ease-in-out">
          {course.btn}
        </button>
      </div>
    </div>
  );
}
