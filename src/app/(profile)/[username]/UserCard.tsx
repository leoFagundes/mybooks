"use client";

import React, { ComponentProps } from "react";
import { PiBooks } from "react-icons/pi";

interface UserCardProps extends ComponentProps<"div"> {
  username: string;
}
export const UserCard = ({ username, ...props }: UserCardProps) => {
  return (
    <div
      {...props}
      className="hover:cursor-pointer shadow-light dark:shadow-dark border border-mainBlack dark:border-mainWhite hover:font-semibold duration-100 rounded-md flex justify-between items-center w-full p-4"
    >
      <h2>{username}</h2>
      <PiBooks size={"24px"} />
    </div>
  );
};
