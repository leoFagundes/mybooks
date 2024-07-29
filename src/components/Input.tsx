"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Input = () => {
  return (
    <div className="flex items-center relative w-fit">
      <input
        className="bg-transparent w-52 rounded-sm border border-mainBlack dark:border-mainWhite 
        py-1 px-2 focus:outline-none shadow-md"
        type="text"
        placeholder="ex: leoFagundes"
      />
      <FontAwesomeIcon
        onClick={() => window.alert("Clicked")}
        className="absolute right-2 hover:cursor-pointer hover:animate-pulse"
        size={"lg"}
        icon={faMagnifyingGlass}
      />
    </div>
  );
};
