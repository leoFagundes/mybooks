"use client";

import React, { useEffect, useState } from "react";
import { UserProps } from "@/types";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { UsersDisplay } from "./UsersDisplay";
import { Loader } from "@/components/Loader";

export default function SearchPage({
  params,
}: {
  params: { username: string };
}) {
  const [users, setUsers] = useState<UserProps[] | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await UserRepositorie.getUsers();
        const decodedUsername = decodeURIComponent(params.username);
        if (decodedUsername === "allUsers") {
          setUsers(allUsers);
        } else {
          const usersFound = allUsers.filter((user: UserProps) =>
            user.username.toLowerCase().includes(decodedUsername.toLowerCase())
          );
          setUsers(usersFound);
        }
      } catch (error) {
        console.error("Erro ao carregar a usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="flex flex-col gap-4 h-screen py-14">
      {loading && <Loader />}
      <UsersDisplay users={users} params={params} />
    </section>
  );
}
