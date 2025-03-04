import "../styles/normalize.css";
import "../styles/homeSytle.css";

export function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        Quick <strong>Share</strong>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-links">
        {/* <a href="#">Rent</a> */}
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
