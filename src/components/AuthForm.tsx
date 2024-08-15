import React, { ChangeEvent, useState } from "react";

interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = ({}) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);

    setEmail(e.target.value);
  };

  console.log(email);

  return (
    <form
      className="flex w-full flex-col rounded-lg max-w-[500px] bg-gray-300 gap-5 mx-auto p-5
    "
      noValidate
    >
      <h1 className="text-center text-2xl">SignUp Form</h1>

      <input
        type="email"
        name="email"
        placeholder="email"
        className="h-10 px-2 rounded-lg"
        value={email}
        onChange={handleChangeEmail}
      />

      <input
        type="password"
        placeholder="password"
        className="h-10 px-2 rounded-lg"
      />

      <input
        type="password"
        placeholder="confirm password"
        className="h-10 px-2 rounded-lg"
      />

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
