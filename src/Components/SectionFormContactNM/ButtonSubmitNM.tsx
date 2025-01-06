import { DataPropsButtonSubmit } from "../../interfaces";
export default function ButtonSubmit({ data }: { data: DataPropsButtonSubmit }) {
    const { textButton, classButtonSubmit } = data;
    return (
        <button type="submit"
            className={`bg-Orange/50 text-White/100 text-sm desktop:text-lg 
            border-[1px] border-Orange/50 hover:text-Orange/50 
            hover:bg-White/100 cursor-pointer
        ${classButtonSubmit}`}>
            {textButton}
        </button>
    )
}
