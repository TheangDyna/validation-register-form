import React from "react";
import AuthForm from "./components/AuthForm";

const App: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <p>Home Page!!!</p> <AuthForm />
    </div>
  );
};

export default App;
