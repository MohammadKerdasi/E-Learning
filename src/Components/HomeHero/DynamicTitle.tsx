import { DataPropsDynamicTitle } from '../../interfaces'

export default function DynamicTitle({ orangeText, blackText }: DataPropsDynamicTitle) {
    return (
        <p className="text-5xl font-semibold leading-[72px]">
            <span className="text-Orange/50 pr-3">
                {orangeText}</span>{blackText}
        </p>
    )
}
