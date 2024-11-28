import { Link } from "react-router-dom";
import {DataPropsButton} from '../../interfaces'

export default function Button({ data }: { data: DataPropsButton }) {
    return (
        <Link to={data.link}
            className={`h-63 rounded-lg 
            flex items-center justify-center px-6 ${data.className}`}>
            {data.textLink}
        </Link>
    )
}
