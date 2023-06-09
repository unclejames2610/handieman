import Image from "next/image";
import logo from "../public/assets/logo.png";
import loginCover from "../public/assets/loginCover.jpg";
import Link from "next/link";
import Button from "@/components/Button";

export default function Login() {
  return (
    // Login Page
    <div className="bg-main-dark mx-auto h-screen">
      <div className="flex items-center lg:justify-evenly">
        {/* backdrop */}
        <div className="md:flex flex-col items-center bg-main-blue/20 h-screen hidden w-[55%] lg:w-[60%] relative">
          {/* bg image */}
          <Image
            src={loginCover}
            alt="login-cover"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-full w-full opacity-30"
          />
          <div className="text-white/80  text-5xl lg:text-6xl   text-center font-bold px-4 lg:px-48 tracking-wide md:flex flex-col gap-y-4 lg:gap-y-8 hidden md:justify-center md:items-center md:h-full absolute">
            <p>Join Us!</p>
            <p>Connect with professional artisans around you.</p>
          </div>
        </div>
        {/* login form */}
        <div className="flex flex-col gap-4 h-screen p-8 md:w-[45%] lg:w-[40%] w-screen items-center md:pt-48">
          {/* app logo */}
          <Image
            src={logo}
            alt="Logo"
            width={0}
            height={0}
            className="p-0 m-0 h-[270px] w-[300px] object-contain box-border"
          />
          <div className="flex flex-col items-center gap-4 mt-[-150px]">
            {/* enter mail */}
            <input
              type="email"
              placeholder="Email"
              required={true}
              className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
            />
            {/* password */}
            <input
              type="password"
              placeholder="Password"
              required={true}
              className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
            />
            {/* sign in btn */}
            <Button text="sign in" />
            {/* forgot password */}
            <Link href="/forgot-password">
              <div className=" tracking-widest md:tracking-[0.2em] uppercase text-main-blue text-[10px] md:text-xs cursor-pointer hover:text-white hover:underline">
                forgot password?
              </div>
            </Link>
            {/* sign up link */}
            <Link href="/sign-up">
              <div className="capitalize text-xs md:text-sm text-white tracking-wider leading-3 cursor-pointer underline hover:text-main-blue">
                no account? sign up here
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
