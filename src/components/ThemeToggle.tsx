"use client";

import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Tooltip from "./Tooltip";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Tooltip
      content={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
      direction="bottom"
    >
      <div
        className="flex justify-between w-[90px] border gap-1 rounded-md p-1.5 border-mainBlack dark:border-mainWhite hover:cursor-pointer shadow-md"
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`flex justify-center items-center border border-transparent transition-all ease-in duration-100 bg-mainBlack rounded px-2 p-1`}
        >
          <BsSun className={`text-mainWhite`} />
        </div>
        <div
          className={`flex justify-center border border-transparent transition-all ease-in duration-100 items-center bg-mainBlack rounded p-1 px-2 ${
            !darkMode ? "bg-transparent" : "bg-mainWhite"
          }`}
        >
          <BsMoonStars className={`text-mainBlack`} />
        </div>
      </div>
    </Tooltip>
  );
};
