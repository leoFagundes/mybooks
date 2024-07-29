import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="absolute w-full flex justify-between items-center py-3">
      <div className="flex items-center hover:cursor-pointer">
        <Image className="dark:hidden" src="MyBooksBlack.svg" width={100} height={100} alt="MyBooks" />
        <Image className="hidden dark:block" src="MyBooksWhite.svg" width={100} height={100} alt="MyBooks" />
      </div>
      <ul className="flex items-center gap-6">
        <li><ThemeToggle /></li>
        <li className="hover:cursor-pointer">
          <Image className="dark:hidden" src="MyBooksSearchBlack.svg" width={120} height={120} alt="MyBooksSearch" />
          <Image className="hidden dark:block" src="MyBooksSearchWhite.svg" width={120} height={120} alt="MyBooksSearch" />
        </li>
        <li className="hover:cursor-pointer">
          <Image className="dark:hidden" src="MyLoginBlack.svg" width={65} height={65} alt="MyLogin" />
          <Image className="hidden dark:block" src="MyLoginWhite.svg" width={65} height={65} alt="MyLogin" />
        </li>
      </ul>
      
    </nav>
  );
};
