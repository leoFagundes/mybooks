"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="rounded-md p-1.5 border border-mainBlack dark:border-mainWhite hover:cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        <Image className="hidden dark:block" src={"moon.svg"} width={16} height={16} alt="moon" />
        <Image className="dark:hidden" src={"sun.svg"} width={16} height={16} alt="sun" />
    </div>
  );
};
