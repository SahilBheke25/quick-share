import React from "react";
import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";
// import "tailwindcss";
import "./styles/userFrom.css";

const UserProfileComponent = () => {
  return (
    <>
      <div className="card-section flex w100 justify-center">
        <div className="card-holder flex">
          <div className="form-container">
            <label className="form-label">Email:</label>
            <div className="email-box">
              <p>
                Your email address is <strong>sahilbheke3@gmail.com</strong>
              </p>
              <button className="edit-btn">&#9998;</button>
            </div>

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
  );
};

export default UserProfileComponent;
