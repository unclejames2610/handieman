"use client";
import React, { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
// import { useRouter } from "next/router";

const NewPassword: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [passErrorBoolean, setPassErrorBoolean] = useState<boolean>(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = (prevVisibility: boolean) => {
    setShowPassword(!prevVisibility);
  };

  //   const router = useRouter();

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (password.length >= 8) {
        // router.push("/");
      } else {
        setPassErrorBoolean(true);
        setPasswordError("Password must be longer than 8 characters");
      }
    } else {
      setPassErrorBoolean(true);
      setPasswordError("Passwords do not match");
    }
  };

  return (
    <div className="bg-main-dark mx-auto flex items-center flex-col">
      <div className="flex flex-col gap-4 w-screen md:w-[60%] lg:w-[40%] items-center md:border md:border-main-dark md:rounded-xl md:shadow-lg px-8 py-6 md:p-8 md:mt-48  h-screen md:h-[50%] relative">
        {/* back to login */}
        <Link href="/otp">
          <div className="flex gap-1 absolute top-4 left-2 md:top-6 md:left-4 items-center hover:scale-110">
            <BsArrowLeft className="text-main-blue text-sm md:text-lg " />
            <span className="text-main-blue text-xs md:tracking-wide">
              Back
            </span>
          </div>
        </Link>

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
          <h1 className="text-xl md:text-3xl font-bold">Create New Password</h1>
          {/* prompt */}
          <p className="md:text-sm text-xs tracking-wide md:tracking-normal">
            Create a new password below. It must be at least 8 characters.
          </p>
          {passErrorBoolean && (
            <p className="text-xs md:text-sm tracking-wide md:tracking-normal text-red">
              {passwordError}
            </p>
          )}

          {/* enter password */}
          <div className="">
            <div>
              {" "}
              <input
                type="password"
                placeholder="Enter Password"
                minLength={8}
                onChange={handlePasswordChange}
                required
                className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base"
              />
            </div>

            {AiOutlineEye}
          </div>

          {/* re-enter password */}
          <input
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            onChange={handleConfirmPasswordChange}
            required
            className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base"
          />
          {/* save btn */}

          <button
            onClick={() => handleSubmit}
            className="bg-main-blue border cursor-pointer text-white hover:bg-transparent md:p-4 p-2 text-center rounded-xl uppercase tracking-widest border-main-blue hover:border-main-blue w-56 md:w-72 lg:w-96 transition duration-500 text-xs md:text-base"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
