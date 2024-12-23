"use client";

import { BookProps, UserProps } from "@/types";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BookCard } from "../BookCard";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { Loader } from "@/components/Loader";

interface CreateBookModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  user: UserProps | null;
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  booksCollections?: string[];
  booksGenres?: string[];
}

function generateRandomToken(length = 32) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}

export const CreateBookModal = ({
  isOpen,
  onClose,
  user,
  setUser,
  booksCollections,
  booksGenres,
}: CreateBookModalProps) => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<BookProps>({
    id: "",
    title: "",
    description: "",
    genres: [],
    collection: undefined,
    img: "",
    pdf: undefined,
    rate: "",
    authors: [],
    link: undefined,
  });

  const createBook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !book.img ||
      !book.title ||
      !book.description ||
      book.genres.length === 0 ||
      !book.rate ||
      book.authors.length === 0
    ) {
      console.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      if (!user) return;

      const formData = new FormData();
      if (book.pdf) {
        formData.append("pdf", book.pdf as Blob);
      }
      if (user.username) {
        formData.append("userName", user.username);
      }

      const pdfLink = await UserRepositorie.createPdfLink(formData);

      const newBook = { ...book, id: generateRandomToken(), pdf: pdfLink };

      const existingBooks = user.books || [];
      const updatedBooks = [...existingBooks, newBook];

      await UserRepositorie.updateUser(user._id!, {
        ...user,
        books: updatedBooks,
      });

      setUser({
        ...user,
        books: updatedBooks,
      });

      handleOnClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    setBook({
      id: "",
      title: "",
      description: "",
      collection: "",
      genres: [],
      img: "",
      pdf: undefined,
      rate: "",
      authors: [],
      link: undefined,
    });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <section className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-transparent backdrop-blur-sm z-30">
          <div className="flex flex-col items-center gap-8 bg-mainWhite dark:bg-mainBlack border shadow-light dark:shadow-dark rounded-md border-mainBlack dark:border-mainWhite p-8 w-[800px] max-w-[90%] max-h-[90%] relative">
            {loading && <Loader />}
            <h2 className="text-xl font-semibold">Cadastrar novo livro</h2>
            <div className="flex gap-8 overflow-y-scroll w-full py-2">
              <form
                onSubmit={createBook}
                className="flex flex-col items-center gap-3 w-full sm:w-1/2"
              >
                <Input
                  value={book.img}
                  setValue={(e) => setBook({ ...book, img: e.target.value })}
                  placeholder="URL da imagem"
                />
                <Input
                  value={book.title}
                  setValue={(e) => setBook({ ...book, title: e.target.value })}
                  placeholder="Título"
                />
                <Input
                  value={book.description}
                  setValue={(e) =>
                    setBook({ ...book, description: e.target.value })
                  }
                  placeholder="Descrição ( -n pula linha )"
                />
                <Input
                  value={book.authors.join(",")}
                  setValue={(e) =>
                    setBook({ ...book, authors: e.target.value.split(",") })
                  }
                  placeholder="Autores ( separados por , )"
                />
                <Input
                  value={book.rate}
                  setValue={(e) => setBook({ ...book, rate: e.target.value })}
                  placeholder="Avaliação"
                />
                <Input
                  value={book.genres.join(",")}
                  setValue={(e) =>
                    setBook({ ...book, genres: e.target.value.split(",") })
                  }
                  placeholder="Gêneros ( separados por , )"
                  options={booksGenres}
                />
                <Input
                  value={book.collection || ""}
                  setValue={(e) =>
                    setBook({ ...book, collection: e.target.value })
                  }
                  placeholder="Coleção"
                  options={booksCollections}
                />
                {/* <Input
                  value={book.link || ""}
                  setValue={(e) => setBook({ ...book, link: e.target.value })}
                  placeholder="Link adicional"
                /> */}
                <Input
                  value={""}
                  setValue={(e) =>
                    setBook({ ...book, pdf: e.target.files?.[0] })
                  }
                  placeholder="URL do PDF"
                  name="pdf"
                  type="file"
                />
                <Button type="submit">Salvar</Button>
              </form>
              <div className="hidden sm:flex  flex-col items-center gap-3 w-1/2">
                <h3 className="text-lg">Pré-visualização</h3>
                <BookCard book={book} isAuthenticated isPreviw />
              </div>
            </div>
            <IoMdClose
              size={"24px"}
              className="absolute top-6 right-6 hover:cursor-pointer"
              onClick={handleOnClose}
            />
          </div>
        </section>
      )}
    </>
  );
};
