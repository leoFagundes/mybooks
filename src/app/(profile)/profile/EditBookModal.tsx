"use client";

import { BookProps, UserProps } from "@/types";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import { BookCard } from "../BookCard";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { Loader } from "@/components/Loader";

interface EditBookModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  user: UserProps | null | undefined;
  setUser: Dispatch<SetStateAction<UserProps | null>> | undefined;
  bookByProps: BookProps;
}

export const EditBookModal = ({
  isOpen,
  onClose,
  user,
  setUser,
  bookByProps,
}: EditBookModalProps) => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<BookProps>({
    id: "",
    title: "",
    description: "",
    genres: [],
    img: "",
    pdf: undefined,
    rate: "",
    authors: [],
    link: undefined,
  });

  useEffect(() => {
    setBook(bookByProps);
  }, []);

  const editBook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    try {
      if (!user) return;

      const updatedBook = { ...book };

      const existingBooks = user.books || [];
      const bookIndex = existingBooks.findIndex((b) => b.id === updatedBook.id);

      if (bookIndex !== -1) {
        // Atualiza o livro no array de livros
        const updatedBooks = [
          ...existingBooks.slice(0, bookIndex),
          updatedBook,
          ...existingBooks.slice(bookIndex + 1),
        ];

        // Atualiza o usuário com a nova lista de livros
        await UserRepositorie.updateUser(user._id!, {
          ...user,
          books: updatedBooks,
        });

        setUser &&
          setUser({
            ...user,
            books: updatedBooks,
          });
      }

      handleOnClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <section className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-transparent backdrop-blur-sm z-30">
          <div className="flex flex-col items-center gap-8 bg-mainWhite dark:bg-mainBlack border shadow-light dark:shadow-dark rounded-md border-mainBlack dark:border-mainWhite p-8 w-[800px] max-w-[90%] max-h-[90%] relative">
            {loading && <Loader />}
            <h2 className="text-xl font-semibold">Editar livro</h2>
            <div className="flex items-center gap-8 overflow-y-scroll w-full py-3">
              <form
                onSubmit={editBook}
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
                />
                {/* <Input
                  value={book.link || ""}
                  setValue={(e) => setBook({ ...book, link: e.target.value })}
                  placeholder="Link adicional"
                /> */}
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
