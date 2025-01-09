import { DataPropsInput } from "../../interfaces";

export default function InputNM({ data }: { data: DataPropsInput }) {
  const { className, name, classLabel, label, type, placeholder, classInput, icon, classIcon, classParent, onClickInput, onClickIcon, onClickTextarea, onChangeInput, value } = data;
  
  return (
    <div className={`${name === 'message' ? 'h-[171px] lg:h-[181px] desktop:h-[213px]' : 'h-[93px] lg:h-24 desktop:h-[111px]'} ${className}`}>
      <label htmlFor={name} className={`text-sm lg:text-base desktop:text-lg text-Grey/15 h-21 font-medium leading-5.6 lg:leading-6 desktop:leading-27 ${classLabel}`}>
        {label}
      </label>
      <div className={`relative bg-White/99 mt-4 border-[1px] border-White/95 flex justify-center py-6 px-5 lg:py-5 rounded-md ${classParent} ${name === 'message' ? 'h-[138px] desktop:h-[170px]' : 'h-60 desktop:h-[68px]'}`}>
        {name === 'message' ? (
          <textarea
            name="message"
            id="message"
            placeholder={placeholder}
            className="w-full bg-White/99 focus:outline-none"
            onClick={onClickTextarea}
            value={value || ""} 
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`w-full bg-White/99 focus:outline-none ${classInput}`}
            onClick={onClickInput}
            onChange={onChangeInput}
            value={value || ""} 
          />
        )}
        {name === 'password' && (
          <img src={icon} alt="icon" className={classIcon} onClick={onClickIcon} />
        )}
      </div>
    </div>
  );
}
