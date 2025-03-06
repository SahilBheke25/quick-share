import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";
import "./styles/userFrom.css";
import { User } from "../types/types";

// import

interface UserProfileProps {
  user: User | null
  values: {
    firstName: string | undefined;
    lastName: string | undefined;
    address: string | undefined;
    pincode: number | undefined;
    email: string | undefined;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
}
const UserProfileComponent = ({
  user,
  values,
  handleChange,
  handleSubmit,
  errors,
}: UserProfileProps) => {
  return (
    <>
      <div className="card-section flex w100 justify-center">
        <div className="card-holder flex">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={user?.firstname}
                placeholder="Enter First Name"
                className="input-field"
                onChange={handleChange}
              />
              {errors.firstName ? <div>{errors.firstName}</div> : null}

              <label className="form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={user?.lastname}
                placeholder="Enter Last Name"
                className="input-field"
                onChange={handleChange}
              />
              {errors.lastName ? <div>{errors.lastName}</div> : null}

              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="Enter email"
                className="input-field"
                onChange={handleChange}
              />
              {errors.email ? <div>{errors.email}</div> : null}

              <label className="form-label">Address:</label>
              <input
                type="text"
                name="address"
                value={user?.address}
                placeholder="Enter your Address"
                className="input-field"
                onChange={handleChange}
              />
              {errors.address ? <div>{errors.address}</div> : null}
              <label className="form-label">Pincode:</label>
              <input
                type="number"
                name="pincode"
                value={user?.pincode}
                placeholder="Enter your Pincode"
                className="input-field"
                onChange={handleChange}
              />
              {errors.pincode ? <div>{errors.pincode}</div> : null}

              <button type="submit" className="submit-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfileComponent;
