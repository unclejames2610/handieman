import React, { FC, MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-main-blue border cursor-pointer text-white hover:bg-transparent md:p-4 p-2 text-center rounded-xl uppercase tracking-widest border-main-blue w-48 md:w-72 lg:w-96 transition duration-500 text-xs md:text-base"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
