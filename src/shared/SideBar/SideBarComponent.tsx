import "../styles/normalize.css";
import "../styles/homeSytle.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="Images/IMG_20250217_124718_570.jpg" alt="Profile Picture" />
        <div className="info">
          <h3>{user ? user.username : "Username"}</h3>
          <p>{user ? user.email : "example@gmail.com"}</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="/user/user-profile">Profile</a>
            {/* <button>Profile</button> */}
          </li>
          <li>
            <a href="#">Account & Security</a>
          </li>
          <li>
            <a href="#">Rented</a>
          </li>
          <li>
            <a href="#">Lended</a>
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
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </div>

      <footer>
        Crafted with ♥️
        <br />
        by Sahil Bheke
      </footer>
    </div>
  );
}

export default Navbar;
