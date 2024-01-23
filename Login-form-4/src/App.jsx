import React from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="h-[100vh] w-full flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage hanldeSubmit={hanldeSubmit} />} />
          <Route
            path="/register"
            element={<RegisterPage hanldeSubmit={hanldeSubmit} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
