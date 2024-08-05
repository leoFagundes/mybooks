"use client";

import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

export const ButtonLogout = () => {
  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      <p className="text-lg">Sair</p>
      <LuLogOut size={"20px"} />
    </div>
  );
};
