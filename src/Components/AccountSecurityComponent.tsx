import "./styles/userFrom.css";

interface UserProfileProps {
  values: {
    email: string | undefined;
    password: string;
    newPassword: string;
    reTypeNewPassword: string; 
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
}

const AccountSecurityComponent = ({
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
                name="email"
                value={values.email}
                placeholder="Enter email"
                className="input-field"
                onChange={handleChange}
              />
              {errors.email ? <div>{errors.email}</div> : null}

              <label className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter current password"
                className="input-field"
                onChange={handleChange}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="input-field"
                onChange={handleChange}
              />
              <input
                type="password"
                name="reTypeNewPassword"
                placeholder="Re-type new password"
                className="input-field"
                onChange={handleChange}
              />

              <button className="submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSecurityComponent;
