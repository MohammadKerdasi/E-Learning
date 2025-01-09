import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DataPropsButtonSubmit, DataPropsInput } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import InputNM from "../SectionFormContactNM/InputNM";
import TitleLK from "../TitleLK/TitleLK";
import ButtonSubmit from "../SectionFormContactNM/ButtonSubmitNM";
import { signup, login } from "../../redux/authSlice"; // استيراد الأكشن من Redux
import { useState, useEffect } from "react";

interface formDataHH {
  title: string;
  p: string;
  data: DataPropsInput[];
  link?: string;
  dataBtn: DataPropsButtonSubmit;
  formType: "login" | "signup"; // إضافة خاصية لتحديد النوع
}

export default function FormHH({
  title,
  p,
  data,
  link,
  dataBtn,
  formType,
}: formDataHH) {
  const dispatch = useDispatch(); // استخدام الـ Dispatch من Redux
  const [formState, setFormState] = useState<{ [key: string]: string }>({});

  // إعادة تعيين الحقول عند التبديل بين login و signup
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

    if (formType === "signup") {
      // إنشاء كائن المستخدم الجديد
      const newUser = {
        id: Date.now().toString(), // إنشاء ID فريد
        name: formState.name,
        email: formState.email,
        password: formState.password,
      };

      // استدعاء الدسباتش لإضافة المستخدم إلى الـ Store
      dispatch(signup(newUser));
      console.log("User signed up:", newUser);
    } else if (formType === "login") {
      // التحقق من بيانات تسجيل الدخول
      dispatch(login({ email: formState.email, password: formState.password }));
      console.log("User logged in:", formState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="desktop:p-12.5 bg-white">
      <TitleLK text={title} fontSize="text-5xl" />
      <PargraphCommonLK par={p} />
      {data.map((data, index) => (
        <InputNM
          key={`input-${index}`}
          data={{
            ...data,
            onChangeInput: (e) => handleInputChange(data.name, e.target.value),
            value: formState[data.name] || "", // استخدم القيمة من الـ state
          }}
        />
      ))}
      <Link className="block text-end" to={link || "#"}>
        {link}
      </Link>
      <ButtonSubmit data={dataBtn} />
    </form>
  );
}
