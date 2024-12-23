"use client";

import { Input } from "@/components/Input";
import { BookProps, BookVolume } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdManageSearch } from "react-icons/md";
import { BookCard } from "../(profile)/BookCard";
import { BookCardByGoogleApi } from "./BookCardByGoogleApi";

export default function MyBooksSearchPage() {
  const [value, setValue] = useState("");
  const [books, setBooks] = useState<BookVolume[] | undefined>();

  useEffect(() => {
    const searchBook = () => {
      if (value != "") {
        axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              value +
              "&key=AIzaSyDccH6F_6QcnNbJlNbKzEEpiS4b60WO-a4" +
              "&maxResults=40"
          )
          .then((res) => {
            setBooks(res.data.items);
          })
          .catch((err) => console.log(err));
      } else {
        setBooks(undefined);
      }
    };

    searchBook();
  }, [value]);

  return (
    <section className="flex flex-col h-screen py-8 gap-4">
      <div className="flex items-center justify-center gap-4 mt-16 ">
        <Input
          value={value}
          setValue={(e) => setValue(e.target.value)}
          placeholder="ex: Verity"
          icon={<MdManageSearch size={"24px"} />}
        />
      </div>
      <div className="flex flex-wrap justify-center overflow-y-scroll items-center gap-4 py-4 h-full">
        {value != "" ? (
          books?.map((book, index) => (
            <BookCardByGoogleApi book={book} key={index} />
          ))
        ) : (
          <div className="border border-mainBlack dark:border-mainWhite rounded-md flex justify-center items-center h-full flex-1">
            <p className="text-lg">Nenhum livro encontrado</p>
          </div>
        )}
      </div>
    </section>
  );
}
