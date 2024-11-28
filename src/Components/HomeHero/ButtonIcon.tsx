import {DataPropsButtonIcon} from '../../interfaces'

export default function ButtonIcon({ icon, className }: DataPropsButtonIcon) {
    return (
        <button className={`rounded-md h-62 w-62 
        flex items-center justify-center ${className}`}>
            <img src={icon} alt="icon" />
        </button> 
    )
}
