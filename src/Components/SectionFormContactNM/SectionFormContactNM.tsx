import InputsContact from "./InputsContact";
import { inputs, additionalInputs } from "../../data/dataInputContactNM";
import ConatctBoxes from "./ConatctBoxesNM";
export default function SectionFormContactNM() {
    return (
        <div className="px-0 lg:px-60 desktop:px-[132px] 
        mb-10 lg:mb-20 desktop:mb-100px
        flex flex-col lg:flex-row">
            <InputsContact inputs={inputs}
                additionalInputs={additionalInputs} />
            <ConatctBoxes />
        </div>
    )
}
