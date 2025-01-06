import { DataPropsInput } from "../interfaces"
export const inputs: DataPropsInput[] = [
    {
        label: 'First Name',
        type: 'text',
        name: 'firstName',
        placeholder: 'Enter First Name',

    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'lastName',
        placeholder: 'Enter Last Name',

    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Enter your Email',

    },
    {
        label: 'Phone',
        type: 'number',
        name: 'phone',
        placeholder: 'Enter Phone Number',

    },
]
export const additionalInputs: DataPropsInput[] = [
    {
        label: 'Subject',
        type: 'text',
        name: 'subject',
        placeholder: 'Enter your Subject',

    },
    {
        label: 'Message',
        type: 'text',
        name: 'message',
        placeholder: 'Enter your Message here...',

    },
]

export const dataButtonSubmit = {
    textButton: 'Send Your Message',
    classButtonSubmit: 'h-[49px] desktop:h-63 rounded-[10px] w-full lg:w-[174px] desktop:w-[220px]'
}