import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefalt();
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex justify-between bg-[#27262C] h-[35rem] w-[55rem] text-white">
        <img className="h-[90%]" src="/Images/Ellipse.png" alt="Ellipse" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-72 font-serif"
        >
          <h2 className="text-5xl m-4 mb-6">Login</h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={input.email}
            required
            className="m-2 p-1 bg-transparent border-b-2 caret-blue-600 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={input.password}
            required
            className="m-2 p-1 bg-transparent border-b-2 caret-blue-600 outline-none"
          />
          <button className="bg-blue-600 p-1 mt-7 rounded-sm text-base active:scale-95">
            Login
          </button>
        </form>
        <div className="flex flex-col justify-between">
          <img
            className="h-64 w-64 "
            src="/Images/Subtract.png"
            alt="Ellipse"
          />
          <img className="h-56" src="/Images/Polygon.png" alt="Ellipse" />
        </div>
      </div>
    </div>
  );
};

export default App;
