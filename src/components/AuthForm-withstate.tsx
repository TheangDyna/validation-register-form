import React, { ChangeEvent, useState } from "react";
import { validateForm } from "../utils";

interface AuthFormProps {}

const initsignUpForm = {
  email: "",
  password: "",
  cpassword: "",
};

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const [signUpForm, setignUpForm] = useState(initsignUpForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setignUpForm((cv) => {
      return { ...cv, [name]: value };
    });

    setErrors((cv) => {
      return { ...cv, [name]: "" };
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    if (isLoading) return;
    e.preventDefault();
    setIsLoading(true);
    const errors = validateForm(signUpForm);
    setErrors(errors);

    const noErrors = Object.values(errors).every((error) => error === "");

    if (noErrors) {
      console.log("Form submitted successfully: ", signUpForm);
      setignUpForm(initsignUpForm);
    }
    setIsLoading(false);
  };

  return (
    <form
      className="flex w-full flex-col rounded-lg max-w-[500px] bg-gray-300 gap-5 mx-auto p-5
    "
      onSubmit={handleSubmit}
      noValidate
    >
      <h1 className="text-center text-2xl">SignUp Form</h1>

      <input
        type="email"
        name="email"
        placeholder="email"
        className="h-10 px-2 rounded-lg"
        value={signUpForm.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="password"
        className="h-10 px-2 rounded-lg"
        value={signUpForm.password}
        onChange={handleChange}
      />

      {errors.password && (
        <p className="text-sm text-red-500"> {errors.password} </p>
      )}

      <input
        type="password"
        name="cpassword"
        placeholder="confirm password"
        className="h-10 px-2 rounded-lg"
        value={signUpForm.cpassword}
        onChange={handleChange}
      />

      {errors.cpassword && (
        <p className="text-sm text-red-500">{errors.cpassword} </p>
      )}

      <div className="flex">
        <div className="flex-1" />
        <button
          className="bg-blue-500 rounded-md h-10 px-5 text-white cursor-pointer"
          type="submit"
          disabled={isLoading}
        >
          SingUp
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
