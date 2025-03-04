import "./styles/register.css";

const RegisterComponent = () => {
  return (
    <>
      <div className="htmlForm-container">
        <div className="row">
          <div className="htmlForm-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input-field" />
          </div>
          <div className="htmlForm-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" />
          </div>
        </div>
        <div className="row">
          <div className="htmlForm-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" className="input-field" />
          </div>
          <div className="htmlForm-group">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" className="input-field" />
          </div>
        </div>
        <div className="row">
          <div className="htmlForm-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="input-field" />
          </div>
          <div className="htmlForm-group">
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" className="input-field" />
          </div>
        </div>

        {/* <div className="htmlForm-group">
            <label htmlFor="country">Country</label>
            <select id="country" className="input-field">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
            </select>
        </div> */}

        <div className="htmlForm-group">
          <label htmlFor="street">Street address</label>
          <input type="text" id="street" className="input-field" />
        </div>

        <div className="row">
          <div className="htmlForm-group">
            <label htmlFor="zip">ZIP / Postal code</label>
            <input type="text" id="zip" className="input-field" />
          </div>
          <div className="htmlForm-group">
            <label htmlFor="addhar">Addhar</label>
            <input type="text" id="addhar" className="input-field" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
