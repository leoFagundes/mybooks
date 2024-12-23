"use client";

import { useState } from "react";
import { Input } from "./Input";
import { MdManageSearch } from "react-icons/md";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (value === "") {
      router.push(`/allUsers`);
    } else {
      router.push(`/${value}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Input
      value={value}
      setValue={(e) => setValue(e.target.value)}
      placeholder="ex: Leonardo Fagundes"
      icon={<MdManageSearch onClick={handleSearch} size={"24px"} />}
      onKeyPress={handleKeyPress}
    />
  );
};
