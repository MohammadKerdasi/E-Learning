import InputsContact from "./InputsContact";
import { inputs, additionalInputs } from "../../data/dataInputContactNM";
import ConatctBoxes from "./ConatctBoxesNM";
export default function SectionFormContactNM() {
    return (
        <div className="px-4 lg:px-20 desktop:px-[162px] 
        mb-10 lg:mb-20 desktop:mb-paddingBottom150
        flex flex-col lg:flex-row">
            <InputsContact inputs={inputs}
                additionalInputs={additionalInputs} />
            <ConatctBoxes />
        </div>
    )
}
