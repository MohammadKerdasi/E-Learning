import { DataPropsButtonIcon } from '../../interfaces'

export default function ButtonIcon({ icon, className, classNameIcon }: DataPropsButtonIcon) {
    return (
        <button className={`rounded-md h-12 w-12 desktop:h-62 desktop:w-62 
        flex items-center justify-center ${className}`}>
            <img src={icon} alt="icon" className={`w-6 h-6 
                lg:h-[34px] lg:w-[34px] ${classNameIcon}`}/>
        </button>
    )
}
