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
import { FiCheck, FiCopy, FiFilter, FiX } from "react-icons/fi";
import Tooltip from "@/components/Tooltip";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";

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
  const [authorSearchTerm, setAuthorSearchTerm] = useState("");
  const [collectionSearchTerm, setCollectionSearchTerm] = useState("");
  const [booksGenres, setBooksGenres] = useState<string[]>([]);
  const [booksAuthors, setBooksAuthors] = useState<string[]>([]);
  const [booksCollections, setBooksCollections] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterByRate, setIsFilterByRate] = useState(false);
  const [isFilterByTitle, setIsFilterByTitle] = useState(true);

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

          const fetchedBooksAuthors: string[] = [];
          existingUser.books?.forEach((book: BookProps) =>
            book.authors.forEach((author) => {
              const normalizedAuthor = author.trim().toLowerCase();
              if (!fetchedBooksAuthors.includes(normalizedAuthor)) {
                fetchedBooksAuthors.push(normalizedAuthor);
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
          setBooksAuthors(
            fetchedBooksAuthors
              .map((author) => author[0].toUpperCase() + author.slice(1))
              .sort()
          );
          setUser(existingUser);
          existingUser._id && localStorage.setItem("userId", existingUser._id);

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
            .includes(collectionSearchTerm.toLowerCase())) &&
        book.authors.some((author) =>
          author.toLowerCase().includes(authorSearchTerm.toLowerCase())
        )
    ) || [];

  const filteredBooksByRate = [...filteredBooks].sort(
    (a, b) => Number(b.rate) - Number(a.rate)
  );
  const filteredBooksByTitle = [...filteredBooks].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const booksToDisplay = isFilterByRate
    ? filteredBooksByRate
    : isFilterByTitle
    ? filteredBooksByTitle
    : filteredBooks;

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

  function cleanFilters() {
    setIsFilterByRate(false);
    setIsFilterByTitle(true);
    setCollectionSearchTerm("");
    setAuthorSearchTerm("");
    setGenreSearchTerm("");
    setSearchTerm("");
  }

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
              <Tooltip content="Adicionar novo livro" direction="bottom">
                <LuPlusSquare
                  onClick={() => setIsOpen(true)}
                  className="hover:cursor-pointer min-w-6"
                  size={"20px"}
                />
              </Tooltip>
              {isCopied ? (
                <Tooltip content="Link copiado" direction="bottom">
                  <FiCheck
                    size={"24px"}
                    className="hover:cursor-pointer min-w-6"
                  />
                </Tooltip>
              ) : (
                <Tooltip content="Copiar link do meu perfil" direction="bottom">
                  <FiCopy
                    className="hover:cursor-pointer min-w-6"
                    onClick={handleCopy}
                    size={"20px"}
                  />
                </Tooltip>
              )}
            </div>
            <ButtonLogout />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 py-2 border-none rounded-mdshadow-none  mb-2">
            <div className="relative flex items-center flex-wrap gap-4 justify-center w-full">
              <Input
                type="text"
                placeholder="Pesquisar livro..."
                value={searchTerm}
                setValue={(e) => setSearchTerm(e.target.value)}
                icon={
                  <Tooltip content="Ativar filtros" direction="bottom">
                    <FiFilter
                      className="h-6 w-6 cursor-pointer"
                      onClick={() => setIsFilterModalOpen(true)}
                    />
                  </Tooltip>
                }
              />
              <Modal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                classname="h-auto !max-h-[600px] !w-[400px] gap-4 absolute"
              >
                <h2 className="font-semibold text-2xl">Filtros</h2>
                <div className="flex flex-col p-2 gap-4 flex-1">
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
                  {booksAuthors.length > 0 && (
                    <Input
                      type="text"
                      placeholder="Autor"
                      value={authorSearchTerm}
                      setValue={(e) => setAuthorSearchTerm(e.target.value)}
                      options={booksAuthors}
                    />
                  )}
                  <span
                    onClick={() => {
                      if (!isFilterByTitle) {
                        setIsFilterByTitle(true); // Ativa o filtro por título
                        setIsFilterByRate(false); // Desativa o filtro por nota
                      }
                    }}
                    className={`p-2 ${
                      isFilterByTitle
                        ? "font-normal border-mainBlack dark:border-mainWhite"
                        : "font-extralight"
                    } border-dashed cursor-pointer border rounded text-sm flex items-center justify-between`}
                  >
                    Filtrar por título {isFilterByTitle ? <FiCheck /> : <FiX />}
                  </span>
                  <span
                    onClick={() => {
                      if (!isFilterByRate) {
                        setIsFilterByRate(true); // Ativa o filtro por nota
                        setIsFilterByTitle(false); // Desativa o filtro por título
                      }
                    }}
                    className={`p-2 ${
                      isFilterByRate
                        ? "font-normal border-mainBlack dark:border-mainWhite"
                        : "font-extralight"
                    } border-dashed cursor-pointer border rounded text-sm flex items-center justify-between`}
                  >
                    Filtrar por maior nota pessoal{" "}
                    {isFilterByRate ? <FiCheck /> : <FiX />}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                  <Button onClick={cleanFilters} onlyStroke>
                    Limpar Filtros
                  </Button>
                  <Button onClick={() => setIsFilterModalOpen(false)}>
                    Aplicar Filtros
                  </Button>
                </div>
              </Modal>
            </div>
          </div>

          <BooksDisplay
            user={{
              ...user,
              books: booksToDisplay,
            }}
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
