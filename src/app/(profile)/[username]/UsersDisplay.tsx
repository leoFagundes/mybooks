"use client";

import { UserProps } from "@/types";
import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { useRouter, useSearchParams } from "next/navigation";
import { BooksDisplay } from "../BooksDisplay";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { SearchInput } from "@/components/SearchInput";
import { IoMdArrowBack } from "react-icons/io";

interface UsersDisplayPorps {
  users: UserProps[] | undefined;
  params: {
    username: string;
  };
}

export const UsersDisplay = ({ users, params }: UsersDisplayPorps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | undefined>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryToken = searchParams.get("q");

  useEffect(() => {
    setCurrentUser(undefined);
    async function fetchUser() {
      try {
        const user = await UserRepositorie.getUserById(queryToken!);
        setCurrentUser(user);
      } catch (error) {
        console.warn(error);
      }
    }

    fetchUser();
  }, [queryToken]);

  const handleClick = async (id: string) => {
    router.push(`/${params.username}${id && "?q="}${id}`);
  };

  return (
    <>
      <div className="flex items-center gap-4 mt-16">
        {queryToken && (
          <IoMdArrowBack
            onClick={() => handleClick("")}
            className="hover:cursor-pointer"
            size={"24px"}
          />
        )}
        <SearchInput />
        {!queryToken && (
          <h1 className="text-2xl">
            <span className="font-semibold">filtro:</span>{" "}
            {`"${params.username}"`}
          </h1>
        )}
        <h1 className="text-2xl">{currentUser?.username}</h1>
      </div>
      {users && users.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {!queryToken ? (
            users.map((user, index) => (
              <UserCard
                onClick={() => handleClick(user._id!)}
                key={index}
                username={user.username}
              />
            ))
          ) : (
            <div className="flex flex-1">
              {currentUser && (
                <BooksDisplay user={currentUser} isAuthenticated={false} />
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="border border-mainBlack dark:border-mainWhite rounded-md flex justify-center items-center flex-1">
          <p className="text-lg">
            Nenhum usuário encontrado para "{params.username}"
          </p>
        </div>
      )}
    </>
  );
};
