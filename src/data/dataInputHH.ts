import { DataPropsInput } from "../interfaces";
import passIcon from '../assets/images/login-signup/Icon (5).png'
export const LoginInputs: DataPropsInput[] = [
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your Email',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6',
        classParent : 'desktop:p-6 desktop:h-[75px] ',
        classInput: 'placeholder:text-lg',
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        icon: passIcon,
        placeholder: 'Enter your Password',
        className : 'desktop:h-auto flex flex-col desktop:mb-2.5 ',
        classParent : 'desktop:p-6 desktop:h-[75px]  mt-0 flex justify-between',
        classInput: 'placeholder:text-lg',
    },
]
export const SignupInputs: DataPropsInput[] = [
    {
        label: 'Full Name',
        type: 'text',
        name: 'name',
        placeholder: 'Enter your Name',
        className : 'desktop:h-auto'
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your Email',
        className : 'desktop:h-auto'
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter your Password',
        icon: passIcon,
        className : 'desktop:h-auto'
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