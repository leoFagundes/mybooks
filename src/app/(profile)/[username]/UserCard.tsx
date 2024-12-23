"use client";

import { UserProps } from "@/types";
import Image from "next/image";
import React, { ComponentProps } from "react";
import { FiUser } from "react-icons/fi";
import { PiBooks } from "react-icons/pi";

interface UserCardProps extends ComponentProps<"div"> {
  user: UserProps;
}
export const UserCard = ({ user, ...props }: UserCardProps) => {
  return (
    <div
      {...props}
      className="hover:cursor-pointer shadow-light dark:shadow-dark border border-mainBlack dark:border-mainWhite hover:font-semibold duration-100 rounded-md flex justify-between items-center w-full p-4"
    >
      <div className="flex items-center gap-2">
        {user.profileImage ? (
          <>
            <Image
              className="rounded-full w-10 shadow-light border"
              height={0}
              width={200}
              alt="profile"
              src={user.profileImage}
            />
          </>
        ) : (
          <div className="flex justify-center items-center rounded-full w-10 h-10 shadow-light border">
            <FiUser className="w-6 h-6" />
          </div>
        )}
        <h2>{user.username}</h2>
      </div>

      <div className="flex items-center gap-1">
        <span>{user.books?.length}</span>
        <PiBooks size={"24px"} />
      </div>
    </div>
  );
};
