import "../styles/normalize.css";
import "../styles/homeSytle.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/Images/profile pic.jpg"
import { useGetUserProfileByIdQuery } from "../../redux/rtk/slice";

function Navbar() {
  // const user = useSelector  ((state: RootState) => state.auth.user);
  const {data: userDetails} = useGetUserProfileByIdQuery(Number(localStorage.getItem("userId")))

  const navigate = useNavigate()
  const handleNavigate = (path:string) => {
    navigate(path)
  }
  const handleLogout = () => {
    // localStorage.clear()
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/")
  
  }
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={userImg} alt="Profile Picture" />
        <div className="info">
          <h3>{userDetails?.data ? userDetails.data.username : "Username"}</h3>
          <p>{userDetails?.data ? userDetails.data.email : "example@gmail.com"}</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a onClick={() => handleNavigate("/user/user-profile")}>Profile</a>
          </li>
          <li>
            <a onClick={() => handleNavigate("/user/account-security")}>Account & Security</a>
          </li>
          <li>
            <a onClick={() => handleNavigate("/user/Rented")}>Rented</a>
          </li>
          <li>
            <a onClick={() => handleNavigate("/user/Lended")}>Lended</a>
          </li>
          <li>
            <a href="#" id="future-scope">
              Bookmarks
            </a>
          </li>
          <li>
            <a href="#" id="future-scope">
              Theme
            </a>
          </li>
          {/* <li>
            <a href="#">Log Out</a>
          </li> */}
        </ul>
      </div>

      {/* <footer>
        Crafted with
        <br />
        by Sahil Bheke
      </footer> */}
      <footer>
        <div className="menu">
          <ul>
            <li>
            <a onClick={handleLogout} className="logout">Log Out</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;

// ♥️