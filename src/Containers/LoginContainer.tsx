import { useDispatch } from "react-redux";
import { setUser } from "../redux/rtk/slice";
import { useUserLoginMutation } from "../redux/rtk/slice";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../Components/LoginComponent";
import { UserCredentials } from "../types/types";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [userLogin, { isLoading, error }] = useUserLoginMutation();
  const navigate = useNavigate();

  const authenticate = async (user: UserCredentials) => {
    try {
      const response = await userLogin(user).unwrap();
      dispatch(setUser(response.data)); // Save user in Redux
      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p style={{ color: "red" }}>Login failed. Please try again.</p>}
      <LoginComponent authenticate={authenticate} />
    </>
  );
};

export default LoginContainer;
