import React, { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

const ForgotPassword: FC = () => {
  return (
    <div className="bg-main-dark mx-auto flex items-center flex-col">
      <div className="flex flex-col gap-4 w-[60%] items-center border border-main-dark rounded-xl shadow-lg p-8 mt-48">
        <Image
          src={logo}
          alt="Logo"
          width={0}
          height={0}
          className="p-0 m-0 h-[270px] w-[300px] object-contain box-border"
        />
        <div className="flex flex-col items-center gap-4 mt-[-150px]">
          <h1 className="text-3xl font-bold">Forgot Password?</h1>
          <p className="text-sm">
            Enter the email you registered with and a verification pin will be
            sent shortly.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
          />

          <button className="bg-main-blue border cursor-pointer text-white hover:bg-transparent md:p-4 p-2 text-center rounded-xl uppercase tracking-widest border-main-blue hover:border-main-blue w-56 md:w-72 lg:w-96 transition duration-500 text-sm md:text-base">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
