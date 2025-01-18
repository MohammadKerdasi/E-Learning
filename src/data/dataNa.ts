import { AboutCardsProps, Accordion, DataPropsHeadline, JoinProps, Pricing } from "../interfaces";
import crown from "./../../src/assets/images/about/achievements/crown.svg"
import medal from "./../../src/assets/images/about/achievements/medal.svg"
import mask from "./../../src/assets/images/about/achievements/mask.svg"
import shield from "./../../src/assets/images/about/achievements/Lightning.svg"

import backpack from "./../../src/assets/images/about/our-goals/icon/icon1.svg"
import bookClosed from "./../../src/assets/images/about/our-goals/icon/icon2.svg"
import puzzlePiece from "./../../src/assets/images/about/our-goals/icon/icon3.svg"
import light from "./../../src/assets/images/about/our-goals/icon/icon4.svg"

import shape from "./../assets/images/about/our-goals/Abstract Design.png"

export const pricingCardsData: Pricing[] = [
    {
        plan: "free plan",
        category: "monthly",
        price: 0,
        features: [
            {
                text: "Access to selected free courses.",
                availability: true,
            },
            {
                text: "Limited course materials and resources.",
                availability: true,
            },
            {
                text: "Basic community support.",
                availability: true,
            },
            {
                text: "No certification upon completion.",
                availability: true,
            },
            {
                text: "Ad-supported platform.",
                availability: true,
            },
            {
                text: "Access to exclusive Pro Plan community forums.",
                availability: false,
            },
            {
                text: "Early access to new courses and updates.",
                availability: false,
            }
        ]
    },
    {
        plan: "pro plan",
        category: "monthly",
        price: 79,
        features: [
            {
                text: "Unlimited access to all courses.",
                availability: true,
            },
            {
                text: "Unlimited course materials and resources.",
                availability: true,
            },
            {
                text: "Priority support from instructors.",
                availability: false,
            },
            {
                text: "Course completion certificates.",
                availability: true,
            },
            {
                text: "Ad-free experience.",
                availability: true,
            },
            {
                text: "Access to exclusive Pro Plan community forums.",
                availability: true,
            },
            {
                text: "Early access to new courses and updates.",
                availability: true,
            }
        ]
    },
    {
        plan: "pro plan",
        category: "yearly",
        price: 40,
        features: [
            {
                text: "Course completion certificates.",
                availability: true,
            },
            {
                text: "Ad-free experience.",
                availability: true,
            },
            {
                text: "Access to exclusive Pro Plan community forums.",
                availability: true,
            },
            {
                text: "Early access to new courses and updates.",
                availability: true,
            },
            {
                text: "Access to selected free courses.",
                availability: false,
            },
            {
                text: "Access to selected free courses.",
                availability: true,
            },
            {
                text: "Access to selected free courses.",
                availability: true,
            }
        ]
    },
    {
        plan: "pro plan",
        category: "yearly",
        price: 65,
        features: [
            {
                text: "Access to selected free courses.",
                availability: true,
            },
            {
                text: "Access to selected free courses.",
                availability: true,
            },
            {
                text: "Access to selected free courses.",
                availability: false,
            },
            {
                text: "Course completion certificates.",
                availability: true,
            },
            {
                text: "Ad-free experience.",
                availability: true,
            },
            {
                text: "Access to exclusive Pro Plan community forums.",
                availability: true,
            },
            {
                text: "Early access to new courses and updates.",
                availability: true,
            }
        ]
    }
]

export const accordionData: Accordion[] = [
    {
        id: 1,
        question: "Can I enroll in multiple courses at once?",
        answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
    },
    {
        id: 2,
        question: "What kind of support can I expect from instructors?",
        answer: "Instructors can provide support through clarification of course material, feedback on assignments, technical assistance, and guidance on projects, often via discussion forums, email, or pre-recorded resources."
    },
    {
        id: 3,
        question: "Are the courses self-paced or do they have specific start and end dates?",
        answer: "The courses are self-paced, allowing you to start and complete them at your own convenience."
    },
    {
        id: 4,
        question: "Are there any prerequisites for the courses?",
        answer: "Some courses may have prerequisites, such as basic knowledge of programming or web development, but most are designed for beginners and do not require prior experience."
    },
    {
        id: 5,
        question: "Can I download the course materials for offline access?",
        answer: "Yes, you can download the course materials for offline access. This allows you to study at your own convenience, even without an internet connection."
    }
]

export const dataHaedPricingNA: DataPropsHeadline = {
    text: "Our pricings",
    para: "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.",
    className: "pt-100px",
    classTitle: 'pt-0 lg:pt-[55.5px] desktop:pt-[45px] capitalize',
    classPara: 'w-[46.867679197%]'
}

export const dataHaedAboutNA: DataPropsHeadline = {
    text: "About Skillbridge",
    para: "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.",
    className: "pt-100px",
    classTitle: 'pt-0 lg:pt-[55.5px] desktop:pt-[45px] capitalize',
    classPara: 'w-[46.867679197%]'
}

export const achievementData: AboutCardsProps[] = [
   {
    img: crown,
    head: "Trusted by Thousands",
    desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
   },
   {
    img: medal,
    head: "Award-Winning Courses",
    desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
   },
   {
    img: mask,
    head: "Positive Student Feedback",
    desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
   },
   {
    img: shield,
    head: "Industry Partnerships",
    desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
   },
]

export const goalData: AboutCardsProps[] = [
    {
     img: backpack,
     head: "Trusted by Thousands",
     desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
    },
    {
     img: bookClosed,
     head: "Award-Winning Courses",
     desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
    },
    {
     img: puzzlePiece,
     head: "Positive Student Feedback",
     desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
    },
    {
     img: light,
     head: "Industry Partnerships",
     desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
    },
 ]

 export const joinData: JoinProps = {
    img: shape,
    text: ", let's shape the future of digital innovation",
    orangeText: "Together",
    desc: "Join us on this exciting learning journey and unlock your potential in design and development.",
    btn: "Join Now",
    link: ""
 }