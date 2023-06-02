import Image from "next/image";
import logo from "../public/assets/logo.png";
import loginCover from "../public/assets/loginCover.jpg";
import Link from "next/link";

export default function Home() {
  return (
    // Login Page
    <div className="bg-main-dark mx-auto">
      <div className="flex items-center lg:justify-evenly ">
        <div className="md:flex flex-col items-center bg-main-blue/80 h-screen hidden w-[55%] lg:w-[60%]">
          <Image
            src={loginCover}
            alt="login-cover"
            width={0}
            height={0}
            className="p-0 m-0 object-cover mix-blend-overlay h-screen w-full opacity-40"
          />
          <div className="text-white/80  text-5xl lg:text-6xl mt-[-650px] lg:mt-[-680px] text-center font-bold px-4 lg:px-48 tracking-wide md:flex flex-col gap-y-4 lg:gap-y-8 hidden">
            <p>Join Us!</p>
            <p>Connect with professional artisans around you.</p>
          </div>
        </div>
        {/* login form */}
        <div className="flex flex-col gap-4 h-screen p-8 md:w-[45%] lg:w-[40%] w-screen items-center md:pt-48">
          <Image
            src={logo}
            alt="Logo"
            width={0}
            height={0}
            className="p-0 m-0 h-[270px] w-[300px] object-contain box-border"
          />
          <div className="flex flex-col items-center gap-4 mt-[-150px]">
            <input
              type="email"
              placeholder="Email"
              className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="border bg-transparent text-white md:p-4 p-2 rounded-lg border-white w-56 md:w-72 lg:w-96 focus:outline-none text-sm md:text-base"
            />
            <button className="bg-main-blue border cursor-pointer text-white hover:bg-transparent md:p-4 p-2 text-center rounded-xl uppercase tracking-widest border-main-blue hover:border-main-blue w-56 md:w-72 lg:w-96 transition duration-500 text-sm md:text-base">
              Sign In
            </button>
            <Link href="/forgot-password">
              <div className=" tracking-widest md:tracking-[0.2em] uppercase text-main-blue text-[10px] md:text-xs cursor-pointer">
                forgot password?
              </div>
            </Link>

            <div className="capitalize text-xs md:text-sm text-white tracking-wider leading-3 cursor-pointer underline hover:text-main-blue">
              no account? sign up here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
