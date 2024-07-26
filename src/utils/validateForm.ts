export const validateForm = (values: {
  email: string;
  password: string;
  cpassword: string;
}) => {
  const errors: {
    email: string;
    password: string;
    cpassword: string;
  } = { email: "", password: "", cpassword: "" };

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.cpassword) {
    errors.cpassword = "Confirm password is required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Passwords do not match";
  }

  return errors;
};
