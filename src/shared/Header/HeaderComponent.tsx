import "../styles/normalize.css";
import "../styles/homeSytle.css";
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate()
  const handleNavigate = (path:string) => {
    navigate(path)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        Quick <strong>Share</strong>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-links">
        <a onClick={() => handleNavigate("/home")}>Home</a>
        <a href="#">Lend</a>
      </div>
      <div className="auth-buttons">
        {/* <button className="login">Login</button>
        <button className="signup">Signup</button> */}
      </div>
    </nav>
  );
}

export default Header;
