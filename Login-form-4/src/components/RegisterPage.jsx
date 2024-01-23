import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = ({ handleSubmit }) => {
  return (
    <div className="main">
      <div className="w-[540px] h-[600px] px-1">
        <img src="Register.png" alt="" />
      </div>
      <div>
        <form className="form-2" onSubmit={handleSubmit}>
          <h1>Please Fill out form to Register!</h1>
          <label className="m-1" htmlFor="text-1">
            Full name:
          </label>
          <input name="text-1" type="text" />
          <label className="m-1" htmlFor="text-2">
            Username:
          </label>
          <input name="text-2" type="text" />
          <label className="m-1" htmlFor="email">
            Email:
          </label>
          <input name="email" type="email" />
          <label className="m-1" htmlFor="password-1">
            Password:
          </label>
          <input name="password-1" type="password" />
          <label className="m-1" htmlFor="password-2">
            Confirm Password:
          </label>
          <input name="password-2" type="password" />
          <button className="p-1 rounded-full mt-6 bg-blue-500">
            Register
          </button>
          <div>
            <p className="mt-3">
              Already have an account?
              <span>
                <Link to="/"> Login</Link>
              </span>
            </p>
            <div className="flex justify-center items-center mt-7">
              <img className="mx-2 cursor-pointer" src="Whatsapp.png" alt="" />
              <img className="mx-2 cursor-pointer" src="Facebook.png" alt="" />
              <img className="mx-2 cursor-pointer" src="Email.png" alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
