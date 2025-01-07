import { NavLink } from "react-router-dom";
import { DataPropsButton } from '../../interfaces'

export default function Button({ data }: { data: DataPropsButton }) {
    return (
        <NavLink to={data.link}
            className={`rounded-lg text-sm lg:text-base 
            desktop:text-lg cursor-pointer flex items-center 
            justify-center ${data.className}`}>
            {data.textLink}
        </NavLink>
    )
}
