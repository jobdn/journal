import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const About = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("../pages/about")), 2000)
    )
);
const Home = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("../pages/home")), 2000)
    )
);

export const App = () => {
  return (
    <div className="app light">
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/"}>MAIN</NavLink>
      </nav>
      <React.Suspense fallback="Loading....">
        <Routes>
          <Route path="/" element={<h1>MAIN</h1>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};
