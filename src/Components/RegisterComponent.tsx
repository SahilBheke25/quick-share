import "./styles/RegisterStyles/css/style.css"; // Ensure you have your CSS file in the right path
import "./styles/RegisterStyles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import registerImg from "./styles/RegisterStyles/images/registerImg.jpg"; // Ensure you have your image in the right path

type RegistrationProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
  touched: any;
};
const CopyRegisterComponent = ({
  handleChange,
  handleSubmit,
  errors,
  touched,
}: RegistrationProps) => {
  return (
    <div
      className="wrapper"
      style={{ backgroundImage: "url('images/bg-registration-form-1.jpg')" }}
    >
      <div className="inner">
        <div className="image-holder">
          <img src={registerImg} alt="Registration" />
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <h3>Registration Form</h3>

          {/* fistName and lastName are in the same div */}
          
          <div className="form-group">
          {errors.firstName && touched.firstName ? (
              <div className="register-error">{errors.firstName}</div>
            ) : null}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              onChange={handleChange}
            />
            
            {errors.lastName && touched.lastName ? (
              <div className="register-error">{errors.lastName}</div>
            ) : null}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              onChange={handleChange}
            />
          
          </div>
          {/* username */}
          {errors.username && touched.username ? (
            <div className="register-error">{errors.username}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control"
              onChange={handleChange}
            />
            <i className="zmdi zmdi-account"></i>
          </div>

          {/* email */}
          {errors.email && touched.email ? (
            <div className="register-error">{errors.email}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="form-control"
              onChange={handleChange}
            />
            <i className="zmdi zmdi-email"></i>
          </div>

          {/* phone */}
          {errors.phone && touched.phone ? (
            <div className="register-error">{errors.phone}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* password */}
          {errors.password && touched.password ? (
            <div className="register-error">{errors.password}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
            />
            <i className="zmdi zmdi-lock"></i>
          </div>

          {/* uid */}
          {errors.uid && touched.uid ? (
            <div className="register-error">{errors.uid}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="uid"
              placeholder="Aadhar No."
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* address */}
          {errors.address && touched.address ? (
            <div className="register-error">{errors.address}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          {/* pincode */}
          {errors.pincode && touched.pincode ? (
            <div className="register-error">{errors.pincode}</div>
          ) : null}
          <div className="form-wrapper">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Register <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CopyRegisterComponent;
