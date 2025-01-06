import { Link } from "react-router-dom";
import { DataPropsButton } from '../../interfaces'

export default function Button({ data }: { data: DataPropsButton }) {
    return (
        <Link to={data.link} onClick={data.onClick}
            className={`rounded-lg text-sm lg:text-base 
            desktop:text-lg cursor-pointer flex items-center 
            justify-center ${data.className}`}>
            {data.textLink}
        </Link>
    )
}
