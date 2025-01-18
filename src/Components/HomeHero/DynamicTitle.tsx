import { DataPropsDynamicTitle } from '../../interfaces'

export default function DynamicTitle({ orangeText, blackText }: DataPropsDynamicTitle) {
    return (
        <p className="text-center text-base lg:text-4xl m-auto 
        desktop:text-5xl font-semibold leading-6 
        lg:leading-[54px] desktop:leading-13 text-Grey/10">
            <span className="text-Orange/50 pr-3">
                {orangeText}</span>{blackText}
        </p>
    )
}