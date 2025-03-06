import { useDispatch } from "react-redux";
import { setUser } from "../redux/rtk/slice";
import { useUserLoginMutation } from "../redux/rtk/slice";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import { UserCredentials } from "../types/types";
import toast from "react-hot-toast"

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [userLogin, { isLoading, error }] = useUserLoginMutation();
  const navigate = useNavigate();

  const authenticate = async (user: UserCredentials) => {
    try {
      const response = await userLogin(user).unwrap();
      dispatch(setUser(response.data)); // Save user in Redux
      console.log("Login successful:", response.data);
      toast.success("Login Successfully")
      navigate("/home");
    } catch (err) {
      
      console.error("Login failed:", err);
      toast.error("Login failed. Please check your credentials.");
      
    }
  };

  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p style={{ color: "red" }}>Login failed. Please try again.</p>}
      <LoginComponent authenticate={authenticate} handleRegister={handleRegister}/>
    </>
  );
};

export default LoginContainer;

// formik
// yup
// api
// protected route