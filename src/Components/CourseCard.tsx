import { Course } from "../interfaces"; 

interface CourseCardProps {
  course: Course; 
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg ">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">{course.level}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">By {course.name}</p>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <button
          className="w-full p-2 bg-White/97 transition-colors"
        >
          Get it Now
        </button>
      </div>
    </div>
  );
}
