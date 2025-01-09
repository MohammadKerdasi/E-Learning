import { useLocation } from "react-router-dom";
import FormHH from "../../Components/FormHH/FormHH";
import SliderSectionHH from "../../Components/SliderSectionHH/SliderSectionHH";
import { dataLoginSubmit, dataSignUpSubmit, LoginInputs, SignupInputs } from "../../data/dataInputHH";


export default function Auth() {
  const location = useLocation();
  return (
    <section className=" desktop:pt-100 desktop:pb-paddingBottom150 px-4 lg:px-20 desktop:px-40 flex justify-between">
      <SliderSectionHH/>
      {location.pathname === '/auth/login'?
      ( <FormHH  formType = {'login'} title="Login" p='Welcome back! Please log in to access your account.' data={LoginInputs} link="Forgot Password?" dataBtn={dataLoginSubmit}/>) 
      :
      ( <FormHH formType = {'signup'} title="SignUp" p='Create an account to unlock exclusive features.' data={SignupInputs} dataBtn={dataSignUpSubmit}/>)
      }
     
    </section>
  )
}
