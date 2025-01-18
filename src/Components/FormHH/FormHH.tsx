import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {formDataHH } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import InputNM from "../SectionFormContactNM/InputNM";
import TitleLK from "../TitleLK/TitleLK";
import ButtonSubmit from "../SectionFormContactNM/ButtonSubmitNM";
import { signup, login } from "../../redux/authSlice"; 
import { useState, useEffect } from "react";
import CheckboxWithLabelH from "../CheckboxWithLabel/CheckboxWithLabelH";
import GoogleBtn from "./GoogleBtn";
import googleIcon from '../../assets/images/login-signup/icon/google-icon.svg'
import arrow from '../../assets/images/login-signup/icon/arrow.png'
import LinkHH from "./LinkHH";
import { showToast } from "../../utils/toast";

export default function FormHH({
  title,
  p,
  data,
  link,
  dataBtn,
  formType,
  labelCheck,
  googleBtn,
  dataLink,
}: formDataHH) {
  const dispatch = useDispatch(); 
  const [formState, setFormState] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  useEffect(() => {
    setFormState({});
  }, [formType]);

  const handleInputChange = (name: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const requiredFields = ['email', 'password'];
    for (const field of requiredFields) {
      if (!formState[field] || formState[field].trim() === '') {
        showToast(`${field} is required.`, 'error'); 
        return;
      }
    }
  
    if (formState.password && formState.password.length < 8) {
      showToast('Password must be at least 8 characters long.', 'error');
      return;
    }
  
    if (formType === "signup") {
      const newUser = {
        id: Date.now().toString(),
        name: formState.name,
        email: formState.email,
        password: formState.password,
      };
  
      try {
        dispatch(signup(newUser));
        showToast('User signed up successfully!', 'success');
        navigate("/auth/login");
      } catch (error : any) {
        showToast(error.message || "An unexpected error occurred.", 'error');
      }
    } else if (formType === "login") {
      try {
        dispatch(login({ email: formState.email, password: formState.password }));
        showToast('Logged in successfully!', 'success');
        navigate("/");
      } catch (error : any) {
        showToast(error.message || "An unexpected error occurred.", 'error'); 
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={` 1600:w-[41.25%] lg:w-[42.19%] desktop:p-12.5 md:p-10 p-7.5  desktop:rounded-xl md:rounded-[10px] bg-white`}>
      <div className=" flex flex-col text-center justify-center items-center desktop:mb-50 md:mb-10 mb-7.5  text- ">
        <TitleLK text={title} fontSize="desktop:!text-5xl desktop:mb-3 md:mb-2 mb-2 md:!text-[38px] md:!leading-[48px] !leading-[35.42px] !text-[28px]" />
        <PargraphCommonLK par={p} />
      </div>
      {data.map((data, index) => (
        <InputNM
          key={`input-${index}`}
          data={{
            ...data,
            type: data.name === 'password' ? (isPasswordVisible ? 'text' : 'password'): data.type,
            onClickIcon: handleIconClick,
            onChangeInput: (e) => handleInputChange(data.name, e.target.value),
            value: formState[data.name] || "",
          }}
        />
      ))}
      <Link className="block text-end  text-Grey/30   desktop:text-lg md:text-base text-sm font-normal  desktop:leading-27 md:leading-6" to={"#"}>
        {link}
      </Link>
      <CheckboxWithLabelH label={labelCheck}/>
      <ButtonSubmit data={dataBtn} />
      <div className=" flex justify-center gap-3 items-center  desktop:my-7.5 my-6">
        <div className="flex-grow border-t border-[#E4E4E7]"></div>
        <span className="text-Grey/60  desktop:text-lg text-sm leading-27">OR</span>
        <div className="flex-grow border-t border-[#E4E4E7]"></div>
      </div>
      <GoogleBtn text={googleBtn} src={googleIcon}/>
      <LinkHH data={dataLink} arrow={arrow}/>
    </form>
  );
}
