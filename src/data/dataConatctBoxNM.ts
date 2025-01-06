import email from '../assets/images/footer/email-icon.png'
import phone from '../assets/images/footer/phone.png'
import map from '../assets/images/footer/Address.png'
import facebook from '../assets/images/footer/facebook-icon.svg'
import linked from '../assets/images/footer/linked-icon.png'
import twitter from '../assets/images/footer/tiwtter-icon.png'
export const dataConatctBox = [
    {
        href: 'mailto:support@skillbridge.com',
        icon: email,
        text: 'support@skillbridge.com'
    },
    {
        href: 'tel:+91 00000 00000',
        icon: phone,
        text: '+91 00000 00000'
    },
    {
        href: 'http://',
        icon: map,
        text: 'Some Where in the World'
    },
]

export const dataSocialBox = {
    text: 'Social Profiles',
    icons: [
        { src: facebook }, { src: linked }, { src: twitter }
    ]
}