import { dataLinkHH, DataPropsInput } from "../interfaces";
import passIcon from '../assets/images/login-signup/Icon (5).png'

export const LoginInputs: DataPropsInput[] = [
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your Email',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        icon: passIcon,
        placeholder: 'Enter your Password',
        className : 'desktop:h-auto flex flex-col mb-2.5 ',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5 mt-0 flex justify-between',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm',
        classIcon: ' md:w-6 md:h-6 w-5 h-5'
    },
]
export const SignupInputs: DataPropsInput[] = [
    {
        label: 'Full Name',
        type: 'text',
        name: 'name',
        placeholder: 'Enter your Name',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your Email',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter your Password',
        icon: passIcon,
        className : 'desktop:h-auto flex flex-col mb-2.5 ',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5 mt-0 flex justify-between',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm',
        classIcon: ' md:w-6 md:h-6 w-5 h-5'
    },
]

export const dataLoginSubmit = {
    textButton: 'Login',
    classButtonSubmit: 'h-[49px] desktop:h-63 rounded-[10px] w-full '
}
export const dataSignUpSubmit = {
    textButton: 'Sign Up',
    classButtonSubmit: 'h-[49px] desktop:h-63 rounded-[10px] w-full '
}

export const dataLoginLink : dataLinkHH[] = [
    {
    linkPath: '/auth/signup',
    ptext:'Don’t have an account?',
    location:'Sign Up',
    }
]
export const dataSignUpLink : dataLinkHH[] = [{
    linkPath: '/auth/login',
    ptext:'Already have an account?',
    location:'Login',
}]

