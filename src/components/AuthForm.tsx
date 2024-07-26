import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
  cpassword: string;
}

interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const password = watch("password");

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex w-full flex-col rounded-lg max-w-[500px] bg-gray-300 gap-5 mx-auto p-5
    "
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-2xl">SignUp Form</h1>

      <input
        type="email"
        placeholder="email"
        className="h-10 px-2 rounded-lg"
        {...register("email", {
          required: "Email is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email is no valid.",
          },
        })}
      />
      {errors.email && (
        <span className="text-sm text-red-500">{errors.email.message}</span>
      )}

      <input
        type="password"
        placeholder="password"
        className="h-10 px-2 rounded-lg"
        {...register("password", {
          required: "Password is required.",
          minLength: {
            value: 6,
            message: "Password should be at-least 6 characters.",
          },
          maxLength: {
            value: 12,
            message: "Password should too long.",
          },
        })}
      />
      {errors.password && (
        <span className="text-sm text-red-500">{errors.password.message}</span>
      )}

      <input
        type="password"
        placeholder="confirm password"
        className="h-10 px-2 rounded-lg"
        {...register("cpassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Confirm Passwords is not match",
        })}
      />
      {errors.cpassword && (
        <span className="text-sm text-red-500">{errors.cpassword.message}</span>
      )}

      <div className="flex">
        <div className="flex-1" />
        <button
          className="bg-blue-500 rounded-md h-10 px-5 text-white cursor-pointer"
          type="submit"
        >
          SingUp
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
