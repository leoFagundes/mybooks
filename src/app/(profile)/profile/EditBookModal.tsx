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
import { FiFile } from "react-icons/fi";

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
  const [booksCollections, setBooksCollections] = useState<string[]>([]);
  const [newBookPdf, setNewBookPdf] = useState<{ pdf?: string | File }>({
    pdf: undefined,
  });
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

  useEffect(() => {
    async function fecthCollections() {
      if (!user) return;

      try {
        const fetchedBooksCollections: string[] = [];
        user.books?.forEach((book: BookProps) => {
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
              (collection) => collection[0].toUpperCase() + collection.slice(1)
            )
            .sort()
        );
      } catch (error) {
        console.error("Erro ao carregar coleções");
      }
    }

    fecthCollections();
    setBook(bookByProps);
  }, []);

  const editBook = async (event: FormEvent<HTMLFormElement>) => {
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

      let pdfLink = book.pdf;
      if (newBookPdf.pdf) {
        const formData = new FormData();
        formData.append("pdf", newBookPdf.pdf as Blob);
        formData.append("userName", user.username);

        pdfLink = await UserRepositorie.createPdfLink(formData);
      }

      const updatedBook = { ...book, pdf: pdfLink };

      const existingBooks = user.books || [];
      const bookIndex = existingBooks.findIndex((b) => b.id === updatedBook.id);

      if (bookIndex !== -1) {
        // Atualiza o livro no array de livros
        const updatedBooks = [
          ...existingBooks.slice(0, bookIndex),
          updatedBook,
          ...existingBooks.slice(bookIndex + 1),
        ];

        await UserRepositorie.updateUser(user._id!, {
          ...user,
          books: updatedBooks,
        });

        setBook(updatedBook);

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

  const handleDeletePdf = async () => {
    if (user && user._id && book.pdf) {
      const parts = (book.pdf as string).split("/");
      const pdfName = `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;

      await UserRepositorie.deletePdf(pdfName);

      const updatedBooks =
        user.books?.map((b) => (b.id === book.id ? { ...b, pdf: "" } : b)) ||
        [];

      const updatedUser = {
        ...user,
        books: updatedBooks,
      };

      await UserRepositorie.updateUser(user._id, updatedUser);

      setBook({ ...book, pdf: undefined });
      setUser && setUser(updatedUser);
    }
  };

  const handleOnClose = () => {
    setNewBookPdf({ pdf: undefined });
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
                <Input
                  value={book.collection || ""}
                  setValue={(e) =>
                    setBook({ ...book, collection: e.target.value })
                  }
                  placeholder="Coleção"
                  options={booksCollections}
                />
                {book.pdf ? (
                  <div
                    onClick={handleDeletePdf}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500 w-[232px]"
                  >
                    <FiFile className="min-w-[20px]" size={"20px"} />{" "}
                    <span>excluir pdf de {book.title}...</span>
                  </div>
                ) : (
                  <Input
                    value={""}
                    setValue={(e) =>
                      setNewBookPdf({ ...book, pdf: e.target.files?.[0] })
                    }
                    placeholder="URL do PDF"
                    name="pdf"
                    type="file"
                  />
                )}
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
