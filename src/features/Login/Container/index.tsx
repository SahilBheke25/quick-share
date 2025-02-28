import LoginComponent from "../Component";
import { UserCredentials } from "../../types/types";
import { useUserLoginMutation } from "../../../redux/slice/slice";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [userLogin, { data, isLoading, error }] = useUserLoginMutation();
  const navigate = useNavigate()
  const authenticate = (user: UserCredentials) => {
    try {
      userLogin(user).unwrap();
      if (isLoading) <h1>"loading"</h1>;
      if (data) {
        console.log("data is here, ", data);
        navigate("/")
      }
      if (error) {  
        console.log("err is here");
      }
    } catch (err) {
     console.log('error:', err)
    }
  };  

  return (
    <>
      <LoginComponent authenticate={authenticate}/>
      {/* {error && {error}} */}
      {/* {data && alert(data.data)} */}
    </>
  );
};
export default LoginContainer;
