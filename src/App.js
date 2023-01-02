import React from "react";
import "./App.css";
import { Route, Routes, useMatch } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Forms/Login/Login";
import Register from "./pages/Forms/Register/Register";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Classes from "./pages/Classes/Classes";
import Class from "./pages/Classes/Class/Class";
import Exam from "./pages/Classes/Exam/Exam";
import RequireAuth from "./components/HOC/RequireAuth";
import RequireNotAuth from "./components/HOC/RequireNotAuth";

function App() {
  const location = useLocation();
  const matchExam = useMatch("/classes/:classId/:examId");
  const isHolyGrid = () => {
    const paths = ["/login", "/register", "/"];
    console.log(location.pathname);
    return paths.includes(location.pathname) || matchExam;
  };

  return (
    <div
      className={clsx("App", {
        holyGrid: isHolyGrid(),
      })}
    >
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireNotAuth to={"/classes"}>
              <Home />
            </RequireNotAuth>
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/login"
          element={
            <RequireNotAuth>
              <Login />
            </RequireNotAuth>
          }
        />
        <Route
          path="/register"
          element={
            <RequireNotAuth>
              <Register />
            </RequireNotAuth>
          }
        />
        <Route
          path="/classes"
          element={
            <RequireAuth>
              <Classes />
            </RequireAuth>
          }
        />
        <Route
          path="/classes/:classId/"
          element={
            <RequireAuth>
              <Class />
            </RequireAuth>
          }
        />
        <Route
          path="/exams/:examId"
          element={
            <RequireAuth>
              <Exam />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
