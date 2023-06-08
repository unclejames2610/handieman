import React, { FC } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface BackButtonProps {
  link: string;
}

const BackButton: FC<BackButtonProps> = ({ link }) => {
  return (
    <Link href={link}>
      <div className="flex gap-1 absolute top-4 left-2 md:top-6 md:left-4 items-center hover:scale-110">
        <BsArrowLeft className="text-main-blue text-sm md:text-lg " />
        <span className="text-main-blue text-xs md:tracking-wide hidden md:block">
          Back
        </span>
      </div>
    </Link>
  );
};

export default BackButton;
