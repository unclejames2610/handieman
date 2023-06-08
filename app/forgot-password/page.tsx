import React, { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
// import { useRouter } from "next/router";

const ForgotPassword: FC = () => {
  // const router = useRouter();

  return (
    <div className="bg-main-dark mx-auto flex items-center flex-col">
      <div className="flex flex-col gap-4 w-screen md:w-[60%] lg:w-[40%] items-center md:border md:border-main-dark md:rounded-xl md:shadow-lg px-8 py-6 md:p-8 md:mt-48  h-screen md:h-[50%] relative">
        {/* back to login */}

        <BackButton link="/" />

        {/* logo */}
        <Image
          src={logo}
          alt="Logo"
          width={0}
          height={0}
          className="p-0 m-0 h-[180px] md:h-[270px] w-[300px] object-contain box-border"
        />
        <div className="flex flex-col items-center gap-4 mt-[-90px] md:mt-[-150px]">
          {/* header */}
          <h1 className="text-xl md:text-3xl font-bold">Forgot Password?</h1>
          {/* prompt */}
          <p className="md:text-sm text-xs tracking-wide md:tracking-normal">
            Enter the email you registered with and a verification pin will be
            sent shortly.
          </p>
          {/* enter email */}
          <input
            type="email"
            placeholder="Enter your email"
            required={true}
            className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base"
          />
          {/* send btn */}
          <Link href="/otp">
            <Button text="send" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
