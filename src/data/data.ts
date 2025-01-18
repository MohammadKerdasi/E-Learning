import { Course } from "../interfaces"
import Course_img2 from '../assets/images/home/our-courses/adv-javascript.png'
import CoursesPage_img1 from '../assets/images/courses/all-courses/Image (11).png'
import CoursesPage_img2 from '../assets/images/courses/all-courses/Image (12).png'
import CoursesPage_img3 from '../assets/images/courses/all-courses/Image (13).png'
import CoursesPage_img4 from '../assets/images/courses/all-courses/Image (14).png'
import CoursesPage_img5 from '../assets/images/courses/all-courses/Image (15).png'
import CoursesPage_img6 from '../assets/images/courses/all-courses/Image (16).png'
import CoursesPage_img7 from '../assets/images/courses/all-courses/Image (17).png'
import CoursesPage_img8 from '../assets/images/courses/all-courses/Image (18).png'
import CoursesPage_img9 from '../assets/images/courses/all-courses/Image (19).png'
import CoursesPage_img10 from '../assets/images/courses/all-courses/graphic-model1.png'
import CoursesPage_img11 from '../assets/images/courses/all-courses/graphic-model2.png'
import CoursesPage_img12 from '../assets/images/courses/all-courses/graphic-model3.png'
import CoursesPage_img13 from '../assets/images/courses/all-courses/front-model1.png'
import CoursesPage_img14 from '../assets/images/courses/all-courses/front-model2.png'
import CoursesPage_img15 from '../assets/images/courses/all-courses/front-model3.png'

 

export const courses: Course[] = [
    {
      id: 1,
      title: 'Web Design Fundamentals',
      name: 'By John Smith',
      category :[
      {id:1,name:'4 Weeks'},
      {id:2,name:'Beginner'}
      ],
      description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1 ,
          title : 'Web Design Fundamentals',
          desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
          btn :
            {
            view : 'View Course' ,
            href : '',
            }
          ,
          

          secTitle : 'Curriculum',
      

        }
      ],
      coursePageImgs :
          {
              src1 : CoursesPage_img1,
              src2 : CoursesPage_img2,
              src3 : CoursesPage_img3,
            }
          
      ,coursePageDataUl : [
        {
          id : 1,
          num : '01',
          desc : 'Introduction to HTML',
          lessons : [
            { 
              id: 1,
              title: "Understanding UI/UX Design Principles",
              duration: "45 Minutes",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Importance of User-Centered Design",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "The Role of UI/UX Design in Product Development",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 2,
          num : '02',
          desc : 'Styling with CSS',
          lessons : [
            { 
              id: 1,
              title: "Conducting User Research and Interviews",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Analyzing User Needs and Behavior",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating User Personas and Scenarios",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 3,
          num : '03',
          desc : 'Introduction to Responsive Design',
          lessons : [
            { 
              id: 1,
              title: "Introduction to Wireframing Tools and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Creating Low-Fidelity Wireframes",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Prototyping and Interactive Mockups",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 4,
          num : '04',
          desc : 'Design Principles for Web',
          lessons : [
            { 
              id: 1,
              title: "Color Theory and Typography in UI Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Visual Hierarchy and Layout Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating a Strong Brand Identity",
              duration: "45 Minutes",
               lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 5,
          num : '05',
          desc : 'Building a Basic Website',
          lessons : [
            { 
              id: 1,
              title: "Usability Testing Methods and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 0'
            },
            {
              id: 2,
              title: "Analyzing Usability Test Results",
              duration: "45 Minutes",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Iterating and Improving UX Designs",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
      ]
      ,
     
    },
    {
      id: 2,
      title: 'UI/UX Design',
      name: 'By Emily Johnson',
      category :[
        {id:1,name:'6 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1 ,
          title : 'UI/UX Design',
          desc: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
          btn :
            {
            view : 'View Course' ,
            href : '',
            }
          ,
         
          secTitle : 'Curriculum',
         

        }
      ],
      coursePageImgs :
      {
          src1 : CoursesPage_img4,
          src2 : CoursesPage_img5,
          src3 : CoursesPage_img6,
      }
      ,coursePageDataUl : [
        {
          id : 1,
          num : '01',
          desc : 'Introduction to UI/UX Design',
          lessons : [
            { 
              id: 1,
              title: "Understanding UI/UX Design Principles",
              duration: "45 Minutes",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Importance of User-Centered Design",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "The Role of UI/UX Design in Product Development",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 2,
          num : '02',
          desc : 'User Research and Personas',
          lessons : [
            { 
              id: 1,
              title: "Conducting User Research and Interviews",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Analyzing User Needs and Behavior",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating User Personas and Scenarios",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 3,
          num : '03',
          desc : 'Wireframing and Prototyping',
          lessons : [
            { 
              id: 1,
              title: "Introduction to Wireframing Tools and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Creating Low-Fidelity Wireframes",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Prototyping and Interactive Mockups",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 4,
          num : '04',
          desc : 'Visual Design and Branding',
          lessons : [
            { 
              id: 1,
              title: "Color Theory and Typography in UI Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Visual Hierarchy and Layout Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating a Strong Brand Identity",
              duration: "45 Minutes",
               lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 5,
          num : '05',
          desc : 'Usability Testing and Iteration',
          lessons : [
            { 
              id: 1,
              title: "Usability Testing Methods and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 0'
            },
            {
              id: 2,
              title: "Analyzing Usability Test Results",
              duration: "45 Minutes",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Iterating and Improving UX Designs",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },

      ]
      
    },
    {
      id: 3,
      title: 'Mobile App Development',
      name: 'By David Brown',
      category :[
        {id:1,name:'8 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1 ,
          title : 'Web Design Fundamentals',
          desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
          btn :
            {
            view : 'View Course' ,
            href : '',
            }
          ,
          
          secTitle : 'Curriculum',
      

        }
      ],
      coursePageImgs :
            {
              src1 : CoursesPage_img7,
          
              src2 : CoursesPage_img8,
           
              src3 : CoursesPage_img9,
            },
          
      coursePageDataUl : [
        {
          id : 1,
          num : '01',
          desc : 'Introduction to Mobile App Development',
          lessons : [
            { 
              id: 1,
              title: "Understanding UI/UX Design Principles",
              duration: "45 Minutes",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Importance of User-Centered Design",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "The Role of UI/UX Design in Product Development",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 2,
          num : '02',
          desc : 'Fundamentals of Swift Programming (iOS)',
          lessons : [
            { 
              id: 1,
              title: "Conducting User Research and Interviews",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Analyzing User Needs and Behavior",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating User Personas and Scenarios",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 3,
          num : '03',
          desc : 'Fundamentals of Kotlin Programming (Android)',
          lessons : [
            { 
              id: 1,
              title: "Introduction to Wireframing Tools and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Creating Low-Fidelity Wireframes",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Prototyping and Interactive Mockups",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 4,
          num : '04',
          desc : 'Building User Interfaces',
          lessons : [
            { 
              id: 1,
              title: "Color Theory and Typography in UI Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Visual Hierarchy and Layout Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating a Strong Brand Identity",
              duration: "45 Minutes",
               lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 5,
          num : '05',
          desc : 'App Deployment and Testing',
          lessons : [
            { 
              id: 1,
              title: "Usability Testing Methods and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 0'
            },
            {
              id: 2,
              title: "Analyzing Usability Test Results",
              duration: "45 Minutes",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Iterating and Improving UX Designs",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
      ]
      
    },
    {
      id: 4,
      title: 'Graphic Design for Beginners',
      name: 'By Sarah Thompson',
      category :[
        {id:1,name:'10 Weeks'},
        {id:2,name:'Beginner'}
        ],
      description: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
     
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1 ,
          title : 'Web Design Fundamentals',
          desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
          btn :
            {
            view : 'View Course' ,
            href : '',
            }
          ,
          
          secTitle : 'Curriculum',
         

        }
      ],
      coursePageImgs :
          {
              src1 : CoursesPage_img10,
          
              src2 : CoursesPage_img11,
        
              src3 : CoursesPage_img12,
         
          },
      coursePageDataUl : [
        {
          id : 1,
          num : '01',
          desc : 'Introduction to Graphic Design',
          lessons : [
            { 
              id: 1,
              title: "Understanding UI/UX Design Principles",
              duration: "45 Minutes",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Importance of User-Centered Design",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "The Role of UI/UX Design in Product Development",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 2,
          num : '02',
          desc : 'Typography and Color Theory',
          lessons : [
            { 
              id: 1,
              title: "Conducting User Research and Interviews",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Analyzing User Needs and Behavior",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating User Personas and Scenarios",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 3,
          num : '03',
          desc : 'Layout Design and Composition',
          lessons : [
            { 
              id: 1,
              title: "Introduction to Wireframing Tools and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Creating Low-Fidelity Wireframes",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Prototyping and Interactive Mockups",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 4,
          num : '04',
          desc : 'Image Editing and Manipulation',
          lessons : [
            { 
              id: 1,
              title: "Color Theory and Typography in UI Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Visual Hierarchy and Layout Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating a Strong Brand Identity",
              duration: "45 Minutes",
               lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 5,
          num : '05',
          desc : 'Designing for Print and Digital Media',
          lessons : [
            { 
              id: 1,
              title: "Usability Testing Methods and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 0'
            },
            {
              id: 2,
              title: "Analyzing Usability Test Results",
              duration: "45 Minutes",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Iterating and Improving UX Designs",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },

      ]
     
    },
    {
      id: 5,
      title: 'Front-End Web Development',
      name: 'By Michael Adams',
      category :[
        {id:1,name:'10 Weeks'},
        {id:2,name:'Intermediate'}
        ],
      description: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1,
          title: 'Web Design Fundamentals',
          desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
          btn: {
            view: 'View Course',
            href: '',
          },

          
          secTitle: 'Curriculum',
          
        }
      ],
      coursePageImgs: 
        {
          
          src1: CoursesPage_img13,
       
          src2: CoursesPage_img14,
        
          src3: CoursesPage_img15,
        },
      
      coursePageDataUl : [
      
            {
              id : 1,
              num : '01',
              desc : 'HTML Fundamentals',
              lessons : [
                { 
                  id: 1,
                  title: "Understanding UI/UX Design Principles",
                  duration: "45 Minutes",
                  lessonNum: 'Lesson 01'
                },
                {
                  id: 2,
                  title: "Importance of User-Centered Design",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 02'
                },
                {
                  id: 3,
                  title: "The Role of UI/UX Design in Product Development",
                  duration: "45 Minutes",
                  lessonNum: 'Lesson 03'
                }
              ]
            },
            {
              id : 2,
              num : '02',
              desc : 'CSS Styling and Layouts',
              lessons : [
                { 
                  id: 1,
                  title: "Conducting User Research and Interviews",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 01'
                },
                {
                  id: 2,
                  title: "Analyzing User Needs and Behavior",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 02'
                },
                {
                  id: 3,
                  title: "Creating User Personas and Scenarios",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 03'
                }
              ]
            },
            {
              id : 3,
              num : '03',
              desc : 'JavaScript Basics',
              lessons : [
                { 
                  id: 1,
                  title: "Introduction to Wireframing Tools and Techniques",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 01'
                },
                {
                  id: 2,
                  title: "Creating Low-Fidelity Wireframes",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 02'
                },
                {
                  id: 3,
                  title: "Prototyping and Interactive Mockups",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 03'
                }
              ]
            },
            {
              id : 4,
              num : '04',
              desc : 'Building Responsive Websites',
              lessons : [
                { 
                  id: 1,
                  title: "Color Theory and Typography in UI Design",
                  duration: "1 Hour",
                   lessonNum: 'Lesson 01'
                },
                {
                  id: 2,
                  title: "Visual Hierarchy and Layout Design",
                  duration: "1 Hour",
                   lessonNum: 'Lesson 02'
                },
                {
                  id: 3,
                  title: "Creating a Strong Brand Identity",
                  duration: "45 Minutes",
                   lessonNum: 'Lesson 03'
                }
              ]
            },
            {
              id : 5,
              num : '05',
              desc : 'Introduction to Bootstrap and React',
              lessons : [
                { 
                  id: 1,
                  title: "Usability Testing Methods and Techniques",
                  duration: "1 Hour",
                  lessonNum: 'Lesson 0'
                },
                {
                  id: 2,
                  title: "Analyzing Usability Test Results",
                  duration: "45 Minutes",
                  lessonNum: 'Lesson 02'
                },
                {
                  id: 3,
                  title: "Iterating and Improving UX Designs",
                  duration: "45 Minutes",
                  lessonNum: 'Lesson 03'
                }
              ]
            },

      ]
     
    },
    {
      id: 6,
      title: 'Advanced JavaScript',
      name: 'By Jennifer Wilson',
      category :[
        {id:1,name:'6 Weeks'},
        {id:2,name:'Advance'}
        ],
      description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
      btn:'Get it Now',
      coursePageData : [
        {
          id: 1 ,
          title : 'Web Design Fundamentals',
          desc: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
          btn :
            {
            view : 'View Course' ,
            href : '',
            }
          ,
          
          secTitle : 'Curriculum',
          

        }
      ]
      ,coursePageImgs :
        {
          
          src1: Course_img2,
    
          src2 :  CoursesPage_img2 ,
        
          src3 : CoursesPage_img3 
        }
      , coursePageDataUl :[
        {
          id : 1,
          num : '01',
          desc : 'Introduction to HTML',
          lessons : [
            { 
              id: 1,
              title: "Understanding UI/UX Design Principles",
              duration: "45 Minutes",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Importance of User-Centered Design",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "The Role of UI/UX Design in Product Development",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 2,
          num : '02',
          desc : 'Styling with CSS',
          lessons : [
            { 
              id: 1,
              title: "Conducting User Research and Interviews",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Analyzing User Needs and Behavior",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating User Personas and Scenarios",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 3,
          num : '03',
          desc : 'Introduction to Responsive Design',
          lessons : [
            { 
              id: 1,
              title: "Introduction to Wireframing Tools and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Creating Low-Fidelity Wireframes",
              duration: "1 Hour",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Prototyping and Interactive Mockups",
              duration: "1 Hour",
              lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 4,
          num : '04',
          desc : 'Design Principles for Web',
          lessons : [
            { 
              id: 1,
              title: "Color Theory and Typography in UI Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 01'
            },
            {
              id: 2,
              title: "Visual Hierarchy and Layout Design",
              duration: "1 Hour",
               lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Creating a Strong Brand Identity",
              duration: "45 Minutes",
               lessonNum: 'Lesson 03'
            }
          ]
        },
        {
          id : 5,
          num : '05',
          desc : 'Building a Basic Website',
          lessons : [
            { 
              id: 1,
              title: "Usability Testing Methods and Techniques",
              duration: "1 Hour",
              lessonNum: 'Lesson 0'
            },
            {
              id: 2,
              title: "Analyzing Usability Test Results",
              duration: "45 Minutes",
              lessonNum: 'Lesson 02'
            },
            {
              id: 3,
              title: "Iterating and Improving UX Designs",
              duration: "45 Minutes",
              lessonNum: 'Lesson 03'
            }
          ]
        },

      ]
      
    },
  ]
