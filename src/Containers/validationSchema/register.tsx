import * as Yup from 'yup';

const RegistrationValidation = Yup.object({
  username: Yup.string()
    .min(3, "atleast 3 characters")
    .max(15, "atmost 15 characters")
    .required("*required"),

  password: Yup.string().min(8, "atleast 8 characters").required("*required"),

  firstname: Yup.string()
    .min(3, "atleast 3 characters")
    .max(15, "atmost 15 characters")
    .required("*required"),

  lastname: Yup.string()
    .min(3, "atleast 3 characters")
    .max(15, "atmost 15 characters")
    .required("*required"),

  email: Yup.string().email("Invalid").required("*required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "must be 10 digits")
    .required("*is required"),

  address: Yup.string()
    .min(5, "atleast 5 characters")
    .max(50, "atmost 50 characters")
    .required("*required"),

  pincode: Yup.number()
    .typeError("must be a number")
    .integer("must be an integer")
    .positive("must be positive")
    .test(
      "len",
      "Enter a valid 6-digit pincode",
      (val) => val?.toString().length === 6
    )
    .required("*required"),

  uid: Yup.number()
    .typeError("mustbe a number")
    .integer("mustbe an integer")
    .positive("mustbe positive")
    .test("len", "mustbe be 12 digits", (val) => val?.toString().length === 12)
    .required("*required"),
});

export default RegistrationValidation;
