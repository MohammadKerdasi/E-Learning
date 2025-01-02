import { Accordion, Pricing } from "../interfaces";

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