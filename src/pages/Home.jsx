import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center font-semibold h-screen ">
      <div className="m-10 md:m-[75px]">
        <img src={logo} alt="" className="h-36 md:h-56 w-36 md:w-56" />
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-lg text-grey md:text-4xl">Welcome to Mathematics Club<br/> VIT Chennai </h1>
        <h1 className="text-lg text-pink md:text-4xl">Where logic meets creativity</h1>
      </div>
    </div>
  );
};

export default Home;
