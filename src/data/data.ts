import { Course } from "../interfaces"
import Course_img1 from '../assets/images/home/our-courses/design.png'
import Course_img2 from '../assets/images/home/our-courses/adv-javascript.png'
import Course_img3 from '../assets/images/home/our-courses/frontend.png'
import Course_img4 from '../assets/images/home/our-courses/graphic-design.png'
import Course_img5 from '../assets/images/home/our-courses/mobile-app.png'
import Course_img6 from '../assets/images/home/our-courses/ui-ux.png'
 

export const courses: Course[] = [
    {
      id: '1',
      title: 'Web Design Fundamentals',
      name: 'John Smith',
      duration: '8 Weeks',
      level: 'Beginner',
      description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.',
      image: Course_img1,
    },
    {
      id: '2',
      title: 'UI/UX Design',
      name: 'Emily Johnson',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'Master the art of creating intuitive user interfaces and enhancing user experience.',
      image: Course_img2,
    },
    {
      id: '3',
      title: 'Advanced JavaScript',
      name: 'Michael Brown',
      duration: '10 Weeks',
      level: 'Advanced',
      description: 'Dive deep into advanced JavaScript concepts and modern frameworks.',
      image: Course_img3,
    },
    {
      id: '4',
      title: 'Responsive Web Design',
      name: 'Sarah Lee',
      duration: '7 Weeks',
      level: 'Intermediate',
      description: 'Learn to create websites that look great on any device using responsive design techniques.',
      image: Course_img4,
    },
    {
      id: '5',
      title: 'Full Stack Development',
      name: 'David Wilson',
      duration: '12 Weeks',
      level: 'Advanced',
      description: 'Master both front-end and back-end technologies to become a full stack developer.',
      image: Course_img5,
    },
    {
      id: '6',
      title: 'Mobile App Design',
      name: 'Lisa Chen',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: 'Learn to design intuitive and engaging mobile applications for iOS and Android platforms.',
      image: Course_img6,
    },
  ]
