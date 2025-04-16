import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import Tooltip from "./Tooltip";

export const NavBar = async () => {
  const session = await getServerSession();

  return (
    <nav className="w-[90%] sm:w-2/3 max-w-[1200px] gap-2 flex justify-between items-center py-3">
      <Link href={"/"}>
        <div className="flex items-center hover:cursor-pointer">
          <Tooltip content="Início" direction="bottom">
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
          </Tooltip>
        </div>
      </Link>
      <ul className="flex items-center gap-3 sm:gap-6">
        <li>
          <ThemeToggle />
        </li>
        <Link href={"/book-search"}>
          <li className="hover:cursor-pointer">
            <Tooltip content="Pesquisar um livro" direction="bottom">
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
            </Tooltip>
          </li>
        </Link>
        <li className="hover:cursor-pointer">
          {session ? (
            <Link href={"/profile"}>
              <Tooltip content="Meu perfil" direction="bottom">
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
              </Tooltip>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Tooltip content="Entrar na minha conta" direction="bottom">
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
              </Tooltip>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
