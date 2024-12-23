"use client";

import { ButtonLogout } from "./ButtonLogout";
import { LuPlusSquare } from "react-icons/lu";
import { BooksDisplay } from "../BooksDisplay";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { BookProps, UserProps } from "@/types";
import { Loader } from "@/components/Loader";
import { CreateBookModal } from "./CreateBookModal";
import { Input } from "@/components/Input";
import Image from "next/image";
import { FiCheck, FiChevronDown, FiChevronUp, FiCopy } from "react-icons/fi";

function generateRandomToken(length = 32) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}

export default function MyBookProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreSearchTerm, setGenreSearchTerm] = useState("");
  const [collectionSearchTerm, setCollectionSearchTerm] = useState("");
  const [booksGenres, setBooksGenres] = useState<string[]>([]);
  const [booksCollections, setBooksCollections] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();

        if (!session) {
          return;
        }

        const existingUsers: UserProps[] = await UserRepositorie.getUsers();
        const existingUser = existingUsers.find(
          (user: UserProps) =>
            user.email === session.user?.email &&
            user.username === session.user?.name
        );

        if (existingUser) {
          if (existingUser._id && !existingUser.profileImage) {
            await UserRepositorie.updateUser(existingUser._id, {
              profileImage: session.user?.image,
            });
          }

          const fetchedBooksGenres: string[] = [];
          existingUser.books?.forEach((book: BookProps) =>
            book.genres.forEach((genre) => {
              const normalizedGenre = genre.trim().toLowerCase();
              if (!fetchedBooksGenres.includes(normalizedGenre)) {
                fetchedBooksGenres.push(normalizedGenre);
              }
            })
          );

          const fetchedBooksCollections: string[] = [];
          existingUser.books?.forEach((book: BookProps) => {
            const normalizedCollection = book.collection?.trim().toLowerCase();

            if (
              normalizedCollection &&
              !fetchedBooksCollections.includes(normalizedCollection)
            ) {
              fetchedBooksCollections.push(normalizedCollection);
            }
          });

          setBooksCollections(
            fetchedBooksCollections
              .map(
                (collection) =>
                  collection[0].toUpperCase() + collection.slice(1)
              )
              .sort()
          );
          setBooksGenres(
            fetchedBooksGenres
              .map((genre) => genre[0].toUpperCase() + genre.slice(1))
              .sort()
          );
          setUser(existingUser);
          return;
        } else {
          const newUser: UserProps = {
            username: session.user?.name || "Anonymous",
            email: session.user?.email || "Anonymous",
            profileImage: session.user?.image || "",
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

  const filteredBooks =
    user?.books?.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.genres.some((genre) =>
          genre.toLowerCase().includes(genreSearchTerm.toLowerCase())
        ) && // Filtrando a coleção
        (!collectionSearchTerm || // Se não há filtro de coleção, inclui todos
          book.collection
            ?.toLowerCase()
            .includes(collectionSearchTerm.toLowerCase()))
    ) || [];

  const handleCopy = () => {
    if (!user) return;

    navigator.clipboard
      .writeText(`${window.location.origin}/${user.username}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
  };

  return (
    <section className="flex flex-col h-screen py-14">
      {loading && <Loader />}
      {user && (
        <>
          <div className="flex items-center justify-between gap-4 py-4 sm:flex-nowrap flex-wrap">
            <div className="flex items-center gap-4">
              {user.profileImage && (
                <>
                  <Image
                    className="rounded-full w-16 shadow-light border"
                    height={0}
                    width={200}
                    alt="profile"
                    src={user.profileImage}
                  />
                </>
              )}
              <h1 className="text-2xl">{user ? user.username : "Anonymous"}</h1>
              <LuPlusSquare
                onClick={() => setIsOpen(true)}
                className="hover:cursor-pointer min-w-6"
                size={"20px"}
              />
              {isCopied ? (
                <FiCheck
                  size={"24px"}
                  className="hover:cursor-pointer min-w-6"
                />
              ) : (
                <FiCopy
                  className="hover:cursor-pointer min-w-6"
                  onClick={handleCopy}
                  size={"20px"}
                />
              )}
            </div>
            <ButtonLogout />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 py-2 sm:border-none rounded-md sm:shadow-none shadow-light mb-2">
            <span
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="sm:hidden flex items-center gap-1 cursor-pointer select-none font-semibold text-lg"
            >
              Filtros {isFiltersOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
            {isFiltersOpen && (
              <div className="flex items-center flex-wrap gap-4 justify-center w-full">
                <Input
                  type="text"
                  placeholder="Pesquisar livro..."
                  value={searchTerm}
                  setValue={(e) => setSearchTerm(e.target.value)}
                />
                {booksGenres.length > 0 && (
                  <Input
                    type="text"
                    placeholder="Gênero"
                    value={genreSearchTerm}
                    setValue={(e) => setGenreSearchTerm(e.target.value)}
                    options={booksGenres}
                  />
                )}
                {booksCollections.length > 0 && (
                  <Input
                    type="text"
                    placeholder="Coleção"
                    value={collectionSearchTerm}
                    setValue={(e) => setCollectionSearchTerm(e.target.value)}
                    options={booksCollections}
                  />
                )}
              </div>
            )}
          </div>

          <BooksDisplay
            user={{ ...user, books: filteredBooks }}
            setUser={setUser}
            isAuthenticated
          />
        </>
      )}
      <CreateBookModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        user={user}
        setUser={setUser}
        booksCollections={booksCollections}
        booksGenres={booksGenres}
      />
    </section>
  );
}
