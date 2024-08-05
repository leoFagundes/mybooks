"use client";

import { ButtonLogout } from "./ButtonLogout";
import { LuPlusSquare } from "react-icons/lu";
import { BooksDisplay } from "../BooksDisplay";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { UserProps } from "@/types";
import { Loader } from "@/components/Loader";
import { CreateBookModal } from "./CreateBookModal";

function generateRandomToken(length = 32) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}

export default function MyBookProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();

        if (!session) {
          return;
        }

        const existingUsers = await UserRepositorie.getUsers();
        const existingUser = existingUsers.find(
          (user: UserProps) =>
            user.email === session.user?.email &&
            user.username === session.user?.name
        );

        if (existingUser) {
          setUser(existingUser);
          return;
        } else {
          const newUser: UserProps = {
            username: session.user?.name || "Anonymous",
            email: session.user?.email || "Anonymous",
            token: generateRandomToken(),
          };

          const createUserSuccess = await UserRepositorie.createUser(newUser);

          if (createUserSuccess) {
            setUser(newUser);
          } else {
            console.error("Erro ao criar o usuário.");
          }
        }
      } catch (error) {
        console.error("Erro ao carregar a sessão:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      signOut({ callbackUrl: "/login?status=emailIsAlreadyInUse" });
    }
  }, [user, loading]);

  return (
    <section className="flex flex-col h-screen py-14">
      {loading && <Loader />}
      {user && (
        <>
          <div className="flex items-center justify-between gap-4 mt-16 ">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl">{user ? user.username : "Anonymous"}</h1>
              <LuPlusSquare
                onClick={() => setIsOpen(true)}
                className="hover:cursor-pointer"
                size={"24px"}
              />
            </div>
            <ButtonLogout />
          </div>
          <BooksDisplay user={user} setUser={setUser} isAuthenticated />
        </>
      )}
      <CreateBookModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        user={user}
        setUser={setUser}
      />
    </section>
  );
}
