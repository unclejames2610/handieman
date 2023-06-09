"use client";
import Button from "@/components/Button";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import customerBg from "../../public/assets/customerBg.jpg";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const SignUpCustomer = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto bg-main-dark h-screen">
      <div className="flex h-screen">
        {/* left side */}
        <div className="bg-main-blue/20 w-[55%] h-full relative">
          <Image
            src={customerBg}
            alt="client bg"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-full w-full opacity-30"
          />
          <Link href="/sign-up">
            <div className="flex gap-1 absolute top-4 left-2 md:top-6 md:left-4 items-center hover:scale-110">
              <BsArrowLeft className="text-main-blue text-sm md:text-lg hidden md:block " />
              <span className="text-main-blue text-xs md:tracking-wide hidden md:block">
                Back
              </span>
            </div>
          </Link>
          <div className="flex flex-col items-center absolute inset-0 justify-center gap-16">
            <p className="text-center text-4xl font-bold capitalize">
              Sign up As A <span className="text-main-blue">Client</span> Today!
            </p>
            <p className="text-center text-xl font-bold capitalize">
              Find professional <span className="text-main-blue">artisans</span>{" "}
              around you.
            </p>
          </div>
        </div>
        {/* form side */}
        <div className="w-[45%] flex flex-col items-center">
          {/* app logo */}
          <Image
            src={logo}
            alt="Logo"
            width={0}
            height={0}
            className="p-0 m-0 h-[270px] w-[300px] object-contain box-border"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center mt-[-130px]"
          >
            {/* first name */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                required={true}
                onChange={(e) => setFirstName(e.target.value)}
                className="my-input border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
              />
            </div>
            {/* last name */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                required={true}
                onChange={(e) => setLastName(e.target.value)}
                className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
              />
            </div>
            {/* username */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                required={true}
                onChange={(e) => setUsername(e.target.value)}
                className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-1">
              <label className="uppercase text-xs text-white " htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
              />
            </div>
            {/* phone number */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <div className="flex items-center gap-2 border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base">
                <span>+234</span>
                <input
                  id="phoneNumber"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Phone Number"
                  value={phoneNumber.slice(4)}
                  onChange={(e) => setPhoneNumber("+234" + e.target.value)}
                  required
                  className="bg-transparent focus:outline-none"
                />
              </div>
            </div>
            {/* password */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center justify-between border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  minLength={8}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent focus:outline-none"
                />
                <span>
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      className="cursor-pointer text-base md:text-lg"
                      onClick={() => togglePasswordVisibility()}
                    />
                  ) : (
                    <AiOutlineEye
                      className="cursor-pointer text-base md:text-lg"
                      onClick={() => togglePasswordVisibility()}
                    />
                  )}
                </span>
              </div>
            </div>
            {/* re-enter password */}
            <div className="flex flex-col gap-1">
              <label
                className="uppercase text-xs text-white "
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="flex items-center justify-between border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-xs md:text-base">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  value={confirmPassword}
                  minLength={8}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-transparent focus:outline-none"
                />
                <span>
                  {showPassword2 ? (
                    <AiOutlineEyeInvisible
                      className="cursor-pointer text-base md:text-lg"
                      onClick={() => togglePasswordVisibility2()}
                    />
                  ) : (
                    <AiOutlineEye
                      className="cursor-pointer text-base md:text-lg"
                      onClick={() => togglePasswordVisibility2()}
                    />
                  )}
                </span>
              </div>
            </div>
            <Button text="sign up" btnType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpCustomer;
