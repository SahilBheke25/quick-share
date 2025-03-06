import "./styles/register.css";

interface RegisterProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleRegisterUser: (event: React.FormEvent<HTMLFormElement>) => void;
	errors: any;
	// touched: {username: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   phone: string;
  //   address: string;
  //   pincode: number;
  //   uid: number;};
}
const RegisterComponent = ({ handleChange, handleRegisterUser, errors}: RegisterProps) => {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Quick Share 🦑
              </h1>

              <form onSubmit={(event) => {
								handleRegisterUser(event)
							}} 
								className="mt-8 grid grid-cols-6 gap-6">
                {/* Username */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="username">UserName</label>
                  <input type="text" id="username" name="username" onChange={handleChange} />
                  {errors.username&& <p className="text-red-500 text-sm register-error">{errors.username}</p>}
                </div>

								<div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" onChange={handleChange} />
                  {errors.password&& <p className="text-red-500 text-sm register-error">{errors.password}</p>}
                </div>

                {/* First Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                  {errors.firstName && <p className="text-red-500 text-sm register-error">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" onChange={handleChange} />
                  {errors.lastName && <p className="text-red-500 text-sm register-error">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="col-span-6">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-sm register-error">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" name="phone" onChange={handleChange} />
                  {errors.phone && <p className="text-red-500 text-sm register-error">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" onChange={handleChange} />
                  {errors.address && <p className="text-red-500 text-sm register-error">{errors.address}</p>}
                </div>

                {/* Pincode */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="pincode">Pincode</label>
                  <input type="number" id="pincode" name="pincode" onChange={handleChange} />
                  {errors.pincode && <p className="text-red-500 text-sm register-error">{errors.pincode}</p>}
                </div>

                {/* UID */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="uid">UID</label>
                  <input type="number" id="uid" name="uid" onChange={handleChange} />
                  {errors.uid && <p className="text-red-500 text-sm register-error">{errors.uid}</p>}
                </div>

                {/* Terms and Conditions */}
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline"> privacy policy</a>.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button type="submit" className="inline-block rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden">
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="#" className="text-gray-700 underline"> Log in</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default RegisterComponent;
