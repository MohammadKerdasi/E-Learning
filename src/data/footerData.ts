import email from '../assets/images/footer/email-icon.png'
import phone from '../assets/images/footer/phone.png'
import Address from '../assets/images/footer/Address.png'
import face from '../assets/images/footer/facebook-icon.svg'
import tiwtter from '../assets/images/footer/tiwtter-icon.png'
import linked from '../assets/images/footer/linked-icon.png'
export const footerInfo = 
[
    {
        icon : email ,
        text : 'hello@skillbridge.com'
    },
    {
        icon : phone ,
        text : '+91 91813 23 2309'
    },
    {
        icon : Address,
        text : 'Somewhere in the World'
    },
]

export const footerSection =
[
    {
        title : 'Home',
        path: '/',
        li: [ 'Benefits' ,'Our Courses' , 'Our Testimonials' , 'Our FAQ']
    },
    {
        title : 'About Us',
        path: '/About',
        li: [ 'Company' ,'Achievements' , 'Our Goals']
    },
] 

export const footerSocial =
[
    {
        title :'Social Profiles',
        icon : [ face , tiwtter , linked ]
    }
]