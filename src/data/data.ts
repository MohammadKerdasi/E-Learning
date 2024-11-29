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
      name: 'By John Smith',
      category :[
      {id:1,name:'4 Weeks'},
      {id:2,name:'Beginner'}
      ],
      description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
      image: Course_img1,
      btn:'Get it Now'
    },
    {
      id: '2',
      title: 'UI/UX Design',
      name: 'By Emily Johnson',
      category :[
        {id:1,name:'6 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
      image:Course_img6,
      btn:'Get it Now'
    },
    {
      id: '3',
      title: 'Mobile App Development',
      name: 'By David Brown',
      category :[
        {id:1,name:'8 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
      image: Course_img5,
      btn:'Get it Now'
    },
    {
      id: '4',
      title: 'Graphic Design for Beginners',
      name: 'By Sarah Thompson',
      category :[
        {id:1,name:'10 Weeks'},
        {id:2,name:'Beginner'}
        ],
      description: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
      image: Course_img4,
      btn:'Get it Now'
    },
    {
      id: '5',
      title: 'Front-End Web Development',
      name: 'By Michael Adams',
      category :[
        {id:1,name:'10 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
      image: Course_img3,
      btn:'Get it Now'
    },
    {
      id: '6',
      title: 'Advanced JavaScript',
      name: 'By Jennifer Wilson',
      category :[
        {id:1,name:'6 Weeks'},
        {id:2,name:'Advance'}
        ],
      description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
      image: Course_img2,
      btn:'Get it Now'
    },
  ]
