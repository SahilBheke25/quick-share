import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";
import "./styles/userFrom.css";

const UserProfileComponent = () => {
  return (
    <>
      <div className="card-section flex w100 justify-center">
        <div className="card-holder flex">
          <div className="form-container">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="input-field"
            />

            <label className="form-label">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="input-field"
            />

            <label className="form-label">Address:</label>
            <input
              type="text"
              placeholder="Enter your Address"
              className="input-field"
            />

            <label className="form-label">Pincode:</label>
            <input
              type="text"
              placeholder="Enter your Pincode"
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
