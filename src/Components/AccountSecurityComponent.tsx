import "./styles/userFrom.css";

const AccountSecurityComponent = () => {
  return (
    <>
    <div className="card-section flex w100 justify-center">
      <div className="card-holder flex">
        <div className="form-container">
          {/* <label className="form-label">Email:</label> */}
          {/* <div className="email-box">
            <p>
              Your email address is <strong>sahilbheke3@gmail.com</strong>
            </p>
            <button className="edit-btn">&#9998;</button>
          </div> */}
          <label className="form-label">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            className="input-field"
          />

          <label className="form-label">Password:</label>
          <input
            type="password"
            placeholder="Enter current password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Re-type new password"
            className="input-field"
          />

          <button className="submit-btn">Save</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default AccountSecurityComponent;