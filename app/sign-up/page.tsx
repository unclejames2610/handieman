import Image from "next/image";
import React, { FC } from "react";
import workerBg from "../../public/assets/workerBg.jpg";
import customerBg from "../../public/assets/customerBg.jpg";
import Button from "@/components/Button";

const SignUp: FC = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="flex h-screen">
        {/* worker section */}
        <div className="w-[50%] flex flex-col items-center h-full justify-center bg-main-dark relative">
          {/* worker bg image */}
          <Image
            src={workerBg}
            alt="worker bg"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-full w-full opacity-30"
          />
          <div className="absolute flex-col gap-y-6 flex items-center justify-center h-full">
            <div className="md:text-4xl lg:text-5xl text-center font-bold ">
              Sign up as a <span className="text-main-blue">Worker</span>
            </div>
            <Button text="Sign Up" />
          </div>
        </div>
        {/* customer section */}
        <div className="w-[50%] flex flex-col items-center h-full justify-center bg-main-dark relative">
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
            <Button text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
