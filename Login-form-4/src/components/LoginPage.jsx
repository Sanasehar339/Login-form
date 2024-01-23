import React from "react";
import { Link } from "react-router-dom";

const LoginPage = ({handleSubmit}) => {
  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <label className="m-2" htmlFor="username">
          Username:
        </label>
        <input name="username" type="text" />
        <label className="m-2" htmlFor="password">
          Password:
        </label>
        <input name="password" type="password" />

        <button className="p-1 rounded-full mt-10 bg-blue-500">Login</button>
        <div>
          <p className="mt-5">
            Dont have an account?
            <span>
              <Link to="/register"> Register</Link>
            </span>
          </p>
          <div className="flex justify-center items-center mt-7">
            <img className="m-2 cursor-pointer" src="Whatsapp.png" alt="" />
            <img className="m-2 cursor-pointer" src="Facebook.png" alt="" />
            <img className="m-2 cursor-pointer" src="Email.png" alt="" />
          </div>
          <img
            className="absolute -z-10 bottom-0 left-0"
            src="/Rectangle.png"
            alt="rectangle"
          />
        </div>
      </form>
      <div className="h-[600px] w-[600px] object-cover">
        <img src="/Login.png" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
