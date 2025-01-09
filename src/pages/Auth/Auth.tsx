import { useLocation } from "react-router-dom";
import FormHH from "../../Components/FormHH/FormHH";
import SliderSectionHH from "../../Components/SliderSectionHH/SliderSectionHH";
import { dataLoginLink, dataLoginSubmit, dataSignUpLink, dataSignUpSubmit, LoginInputs, SignupInputs } from "../../data/dataInputHH";


export default function Auth() {
  const location = useLocation();
  return (
    <section className=" desktop:pt-100 md:pt-20 pt-paddingBottom50 desktop:pb-paddingBottom150 md:pb-100 pb-paddingBottom50 px-4 lg:px-20 1600:px-40 flex lg:flex-row flex-col-reverse justify-between gap-y-[50px]">
      <SliderSectionHH/>
      {location.pathname === '/auth/login'?
      ( <FormHH 

         formType = {'login'} 
         title="Login" 
         p='Welcome back! Please log in to access your account.' 
         labelCheck="Remember Me" 
         data={LoginInputs} 
         link="Forgot Password?" 
         dataBtn={dataLoginSubmit}
         googleBtn="Login with Google"
         dataLink={dataLoginLink}/>) 
      :
      ( <FormHH 
        formType = {'signup'} 
        title="SignUp" 
        p='Create an account to unlock exclusive features.' 
        labelCheck = {<>
        I agree with{" "}
        <span className="underline text-Grey/35">Terms of Use</span> and{" "}
        <span className="underline text-Grey/35">Privacy Policy</span>.
        </>}
        data={SignupInputs} 
        dataBtn={dataSignUpSubmit}
        googleBtn="Sign Up with Google"
        dataLink={dataSignUpLink}/>)
      }
     
    </section>
  )
}
