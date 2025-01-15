import { useState } from "react";
import { DataPropsInput } from "../../interfaces";

export default function InputNM({ data }: { data: DataPropsInput }) {
  const { className, name, classLabel, label, type, placeholder, classInput, icon, classIcon, classParent, onClickInput, onClickIcon, onClickTextarea, onChangeInput, value } = data;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (onClickIcon) onClickIcon();
  };
  return (
    <div className={`${name === 'message'
      ? 'h-[171px] lg:h-[181px] desktop:h-[213px]'
      : 'h-[93px] lg:h-24 desktop:h-[111px]'} ${className}`}>
      <label htmlFor={name} className={`text-sm xl:text-base 
        desktop:text-lg text-Grey/15 h-21 font-medium leading-5.6
        xl:leading-6 desktop:leading-27 ${classLabel}`}>
        {label}
      </label>
      <div
        className={`relative bg-White/99 mt-4 border-[1px] border-White/95 
          flex justify-center py-5 px-5 desktop:py-6 rounded-md ${classParent} 
          ${name === 'message' ? 'h-[138px] desktop:h-[170px]'
            : 'h-60 desktop:h-[68px]'
          }`}
      >
        {name === 'message' ? (
          <textarea
            name="message"
            id="message"
            placeholder={placeholder}
            className="w-full bg-White/99 focus:outline-none"
            onClick={onClickTextarea}
          />
        ) : (
          <input
            type={name === 'password' && !isPasswordVisible ? 'password' : 'text'}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`w-full bg-White/99 focus:outline-none ${classInput}`}
            onClick={onClickInput}
            onChange={onChangeInput}
            {...(value !== undefined ? { value } : {})}
          />
        )}
        {/* for login & sign up pages */}
        {name === 'password' && (
          <img src={icon} alt="icon"
            className={classIcon}
            onClick={handleIconClick}/>
        )}
      </div>
    </div>
  );
}
