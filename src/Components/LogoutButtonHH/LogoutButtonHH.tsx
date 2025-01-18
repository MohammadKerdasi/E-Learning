import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import logoutIcon from '../../assets/images/login-signup/sign-out-alt 1.png'; 


export default function LogoutButtonHH() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout()); 
        navigate("/"); 
      };
  return (
    <div>
    <button onClick={handleLogout} >
      <img src={logoutIcon} alt="logout" /> 
    </button>
    </div>
  )
}
