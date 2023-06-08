import Image from "next/image";
import React, { FC } from "react";
import workerBg from "../../public/assets/workerBg.jpg";
import customerBg from "../../public/assets/customerBg.jpg";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/Button";

const SignUp: FC = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="flex h-screen flex-col md:flex-row">
        {/* worker section */}
        <div className=" w-screen md:w-[50%] flex flex-col items-center h-[50%] md:h-full justify-center bg-main-dark relative">
          {/* worker bg image */}
          <Image
            src={workerBg}
            alt="worker bg"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-full w-full opacity-30"
          />
          {/* back to login */}
          <Link href="/">
            <div className="flex gap-1 absolute top-4 left-2 md:top-6 md:left-4 items-center hover:scale-110">
              <BsArrowLeft className="text-main-blue text-sm md:text-lg " />
              <span className="text-main-blue text-xs md:tracking-wide hidden md:block">
                Back
              </span>
            </div>
          </Link>
          <div className="absolute flex-col gap-y-6 flex items-center justify-center h-full">
            <div className="md:text-4xl lg:text-5xl text-center font-bold ">
              Sign up as a <span className="text-main-blue">Worker</span>
            </div>
            <Button text="Sign Up" />
          </div>
        </div>
        {/* customer section */}
        <div className="w-screen md:w-[50%] flex flex-col items-center h-[50%] md:h-full justify-center bg-main-dark relative">
          {/* worker bg image */}
          <Image
            src={customerBg}
            alt="client bg"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-full w-full opacity-30"
          />
          <div className="absolute flex-col gap-y-6 flex items-center justify-center h-full">
            <div className="md:text-4xl lg:text-5xl  text-center font-bold ">
              Sign up as a <span className="text-main-blue">Client</span>
            </div>
            <Link href="/sign-up-customer">
              <Button text="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
