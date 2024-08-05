import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";

export const NavBar = async () => {
  const session = await getServerSession();

  return (
    <nav className="w-[90%] sm:w-2/3 max-w-[1200px] gap-2 flex justify-between items-center py-3">
      <Link href={"/"}>
        <div className="flex items-center hover:cursor-pointer">
          <Image
            className="dark:hidden"
            src="MyBooksBlack.svg"
            width={100}
            height={100}
            alt="MyBooks"
          />
          <Image
            className="hidden dark:block"
            src="MyBooksWhite.svg"
            width={100}
            height={100}
            alt="MyBooks"
          />
        </div>
      </Link>
      <ul className="flex items-center gap-3 sm:gap-6">
        <li>
          <ThemeToggle />
        </li>
        <Link href={"/book-search"}>
          <li className="hover:cursor-pointer">
            <Image
              className="dark:hidden"
              src="MyBooksSearchBlack.svg"
              width={120}
              height={120}
              alt="MyBooksSearch"
            />
            <Image
              className="hidden dark:block"
              src="MyBooksSearchWhite.svg"
              width={120}
              height={120}
              alt="MyBooksSearch"
            />
          </li>
        </Link>
        <li className="hover:cursor-pointer">
          {session ? (
            <Link href={"/profile"}>
              <Image
                className="dark:hidden"
                src="MyBookProfileBlack.svg"
                width={110}
                height={110}
                alt="BookProfile"
              />
              <Image
                className="hidden dark:block"
                src="MyBookProfileWhite.svg"
                width={110}
                height={110}
                alt="BookProfile"
              />
            </Link>
          ) : (
            <Link href={"/login"}>
              <Image
                className="dark:hidden"
                src="MyLoginBlack.svg"
                width={64}
                height={64}
                alt="MyLogin"
              />
              <Image
                className="hidden dark:block"
                src="MyLoginWhite.svg"
                width={64}
                height={64}
                alt="MyLogin"
              />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
