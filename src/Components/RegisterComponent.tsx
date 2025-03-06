import "./styles/register.css";

const RegisterComponent = () => {
  return (
    <>
		{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to Quick Share 🦑
        </h1>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
				<div className="col-span-6 sm:col-span-3">
            <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
              UserName
            </label>

            <input
              type="text"
              id="Username"
              name="Username"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>
					<div className="col-span-6 sm:col-span-3">
            <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>

            <input
              type="text"
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Pincode" className="block text-sm font-medium text-gray-700">
              Pincode
            </label>

            <input
              type="number"
              id="pincode"
              name="pincode"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

					<div className="col-span-6 sm:col-span-3">
            <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
              Address
            </label>

            <input
              type="text"
              id="Address"
              name="Address"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

					<div className="col-span-6 sm:col-span-3">
            <label htmlFor="Uid" className="block text-sm font-medium text-gray-700">
              Uid
            </label>

            <input
              type="text"
              id="Uid"
              name="Uid"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
          </div>

         

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
     {/* <div class="wrapper" style="background-image: url('images/bg-registration-form-1.jpg');">
			<div class="inner">
				<div class="image-holder">
					<img src="images/registration-form-1.jpg" alt="">
				</div>
				<form action="">
					<h3>Registration Form</h3>
					<div class="form-group">
						<input type="text" placeholder="First Name" class="form-control">
						<input type="text" placeholder="Last Name" class="form-control">
					</div>
					<div class="form-wrapper">
						<input type="text" placeholder="Username" class="form-control">
						<i class="zmdi zmdi-account"></i>
					</div>
					<div class="form-wrapper">
						<input type="text" placeholder="Email Address" class="form-control">
						<i class="zmdi zmdi-email"></i>
					</div>
					<div class="form-wrapper">
						<select name="" id="" class="form-control">
							<option value="" disabled selected>Gender</option>
							<option value="male">Male</option>
							<option value="femal">Female</option>
							<option value="other">Other</option>
						</select>
						<i class="zmdi zmdi-caret-down" style="font-size: 17px"></i>
					</div>
					<div class="form-wrapper">
						<input type="password" placeholder="Password" class="form-control">
						<i class="zmdi zmdi-lock"></i>
					</div>
					<div class="form-wrapper">
						<input type="password" placeholder="Confirm Password" class="form-control">
						<i class="zmdi zmdi-lock"></i>
					</div>
					<button>Register
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div> */}

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

        {/* <div className="htmlForm-group">
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
      </div> */}
    </>
  );
};

export default RegisterComponent;
