import InputNM from "./InputNM";
import { DataPropsInput, Submission } from '../../interfaces';
import ButtonSubmit from "./ButtonSubmitNM";
import { dataButtonSubmit } from "../../data/dataInputContactNM";
import { useDispatch } from 'react-redux';
import { addSubmission } from '../../redux/contactFormSlice/index'

export default function InputsContact({ inputs, additionalInputs }: { inputs: DataPropsInput[]; additionalInputs: DataPropsInput[]; }) {
    const dispatch = useDispatch();
    // submit function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData: Submission = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
        [...inputs, ...additionalInputs].forEach((input) => {
            const element = document.getElementById(input.name) as HTMLInputElement | HTMLTextAreaElement;
            if (element) {
                if (input.name in formData) {
                    formData[input.name as keyof Submission] = element.value;
                }
            }
        });
        for (const key in formData) {
            if (formData[key as keyof Submission] === '') {
                alert(`${key} is required!`);
                return;
            }
        }
        dispatch(addSubmission(formData));
        e.currentTarget.reset();
    }
    return (
        <form className="w-full lg:w-[67.41854637%] p-30px 
        lg:p-60 desktop:p-20 bg-White/100 lg:border-r-[1px] 
        lg:border-r-White/95 border-b-[1px] border-b-White/95"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 
            gap-5 lg:gap-6 desktop:gap-30px pb-5 lg:pb-6 desktop:pb-30px">
                {inputs.map((input, index) => (
                    <InputNM key={`input-${index}`} data={input} />
                ))}
            </div>
            <div className="flex flex-col gap-5 lg:gap-10 desktop:gap-y-paddingBottom50">
                {additionalInputs.map((input, index) => (
                    <InputNM key={`additional-${index}`} data={input} />
                ))}
            </div>
            <div className="flex justify-center mt-30px lg:mt-10 desktop:mt-paddingBottom50">
                <ButtonSubmit data={dataButtonSubmit} />
            </div>
        </form>
    );
}
