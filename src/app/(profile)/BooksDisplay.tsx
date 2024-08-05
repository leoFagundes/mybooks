"use client";

import { BookProps, UserProps } from "@/types";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BookCard } from "./BookCard";

interface BooksDisplayProps {
  user: UserProps;
  isAuthenticated: boolean;
  setUser?: Dispatch<SetStateAction<UserProps | null>>;
}

export const BooksDisplay = ({
  user,
  isAuthenticated,
  setUser,
}: BooksDisplayProps) => {
  const [books, setBooks] = useState<BookProps[] | undefined>();

  useEffect(() => {
    const getBooks = () => {
      try {
        if (!user._id) return;
        const books = user.books;
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, [user]);

  return (
    <>
      {books && books.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-12 overflow-y-scroll py-8">
          {books.map((book, index) => (
            <BookCard
              user={user}
              setUser={setUser}
              key={index}
              book={book}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      ) : (
        <div className="border border-mainBlack my-8 dark:border-mainWhite rounded-md flex justify-center items-center flex-1 p-4">
          <p className="text-lg">Sem livros cadastrados</p>
        </div>
      )}
    </>
  );
};
