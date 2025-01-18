import InputNM from "./InputNM";
import { DataPropsInput, Submission } from '../../interfaces';
import ButtonSubmit from "./ButtonSubmitNM";
import { dataButtonSubmit } from "../../data/dataInputContactNM";
import { useDispatch } from 'react-redux';
import { addSubmission } from '../../redux/contactFormSlice/index';
import { showToast } from "../../utils/toast";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        try {
            // Filling the form data from inputs
            [...inputs, ...additionalInputs].forEach((input) => {
                const element = document.getElementById(input.name) as HTMLInputElement | HTMLTextAreaElement;
                if (element) {
                    if (input.name in formData) {
                        formData[input.name as keyof Submission] = element.value;
                    }
                }
            });

            // Checking if all required fields are filled
            for (const key in formData) {
                if (formData[key as keyof Submission] === '') {
                    showToast(`${key} is required.`, 'error');
                    return;
                }
            }

            // Checking the length of the phone number
            if (formData.phone && formData.phone.length < 10) {
                showToast('Phone must be at least 10 characters long.', 'error');
                return;
            }

            // Dispatch the form data after validation
            dispatch(addSubmission(formData));
            e.currentTarget.reset();
            toast.success("Form submitted successfully!");
        } catch (error) {
            // Handling any errors that occur during the process
            console.error("Error during form submission:", error);
            toast.error("An error occurred while submitting the form.");
        }
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000}
                hideProgressBar newestOnTop closeOnClick rtl={false}
                pauseOnFocusLoss draggable pauseOnHover />
            <form className="w-full lg:w-[67.96875%] 2xl:w-[67.41854637%] 
                p-7.5 xl:p-15 2xl:p-20 bg-White/100 lg:border-r-[1px] 
                lg:border-r-White/95"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 
                    gap-5 lg:gap-6 desktop:gap-7.5 pb-5 lg:pb-6 
                    desktop:pb-7.5">
                    {inputs.map((input, index) => (
                        <InputNM key={`input-${index}`} data={input} />
                    ))}
                </div>
                <div className="flex flex-col gap-5 lg:gap-10 
                    desktop:gap-y-12.5">
                    {additionalInputs.map((input, index) => (
                        <InputNM key={`additional-${index}`} data={input} />
                    ))}
                </div>
                <div className="flex justify-center mt-7.5 lg:mt-10 
                    desktop:mt-12.5">
                    <ButtonSubmit data={dataButtonSubmit} />
                </div>
            </form>
        </>
    );
}
