import { Link } from "react-router-dom";
import { DataPropsButton } from '../../interfaces'

export default function Button({ data }: { data: DataPropsButton }) {
    return (
        <Link to={data.link}
            className={`h-[49px] desktop:h-63 rounded-lg 
            text-sm lg:text-base desktop:text-lg
            flex items-center justify-center ${data.className}`}>
            {data.textLink}
        </Link>
    )
}
