"use client";

import { Loader } from "@/components/Loader";
import { Modal } from "@/components/Modal";
import UserRepositorie from "@/services/repositories/UserRepositorie";
import { BookProps, UserProps } from "@/types";
import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CiEdit, CiImageOff } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { PiDeviceRotateFill } from "react-icons/pi";
import { EditBookModal } from "./profile/EditBookModal";

interface BookCardProps extends ComponentProps<"div"> {
  book: BookProps;
  isAuthenticated: boolean;
  isPreviw?: boolean;
  isFlippedByProps?: boolean;
  user?: UserProps;
  setUser?: Dispatch<SetStateAction<UserProps | null>>;
}

export const BookCard = ({
  book,
  isAuthenticated,
  user,
  isPreviw = false,
  setUser,
  ...props
}: BookCardProps) => {
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    if (isPreviw) {
      setIsFlipped(false);
    }
  }, [book.img]);

  useEffect(() => {
    if (isPreviw) {
      setIsFlipped(true);
    }
  }, [
    book.title,
    book.description,
    book.genres,
    book.collection,
    book.pdf,
    book.rate,
    book.authors,
  ]);

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      if (!user || !user._id || !setUser) return;
      if (book.pdf) {
        const parts = (book.pdf as string).split("/");
        const pdfName = `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
        await UserRepositorie.deletePdf(pdfName as string);
      }

      const updatedUser = {
        ...user,
        books: user.books?.filter((b) => b.id !== book.id) || [],
      };

      await UserRepositorie.updateUser(user._id, { ...updatedUser });

      setUser(updatedUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <EditBookModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        setUser={setUser}
        bookByProps={book}
      />
      <div
        {...props}
        className={`relative card-container w-[300px] min-w-[300px] h-[400px] perspective-1000`}
      >
        {loading && <Loader />}
        <div
          className={`card-flipper relative w-full h-full transition-transform duration-700 transform ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div
            onClick={toggleFlip}
            className={`card-front rounded-md shadow-light dark:shadow-dark absolute w-full h-full backface-hidden hover:cursor-pointer`}
          >
            {book.img ? (
              <img
                className="h-full w-full bg-cover rounded-md shadow-light"
                src={book.img}
                alt=""
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center border border-mainBlack rounded-sm dark:border-mainWhite">
                <CiImageOff size={"64px"} />
              </div>
            )}
          </div>
          <div
            className={`card-back rounded shadow-light dark:shadow-dark absolute border border-mainBlack dark:border-mainWhite w-full h-full backface-hidden flex flex-col gap-2 p-6 transform rotate-y-180`}
          >
            <Modal
              isOpen={isDescriptionOpen}
              onClose={() => setIsDescriptionOpen(false)}
            >
              <h2 className="font-semibold">Descrição</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: book.description.replace(/-n/g, "<br />"),
                }}
              />
            </Modal>
            <h1 className="text-xl text-center w-full font-bold">
              {book.title}
            </h1>
            {book.description && (
              <div className="flex flex-col">
                <h2 className="font-semibold">Descrição</h2>
                <p className="text-sm overflow-hidden text-ellipsis line-clamp-3 ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: book.description.replace(/-n/g, "<br />"),
                    }}
                  />
                </p>
                <span
                  onClick={() => setIsDescriptionOpen(true)}
                  className="flex justify-end text-sm italic hover:text-gray-500 hover:cursor-pointer"
                >
                  Ver mais
                </span>
              </div>
            )}
            <div className="flex justify-between">
              {book.authors.length > 0 && book.authors[0] !== "" && (
                <div>
                  <h2 className="font-semibold">Autor</h2>
                  <p className="flex flex-col text-sm">
                    {book.authors.map((author, index) => (
                      <a
                        href={`https://www.google.com/search?q=${author}`}
                        key={`${index}. ${author}`}
                        className="hover:text-gray-500"
                      >
                        {author}
                      </a>
                    ))}
                  </p>
                </div>
              )}
              {book.rate && (
                <div>
                  <h2 className="font-semibold">Nota pessoal</h2>
                  <p className="text-sm">{book.rate}/10</p>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              {book.genres.length > 0 && book.genres[0] !== "" && (
                <>
                  <h2 className="font-semibold">Gêneros</h2>
                  <ul className="grid grid-cols-2">
                    {book.genres.map((genre, index) => (
                      <li className="list-disc list-inside text-sm" key={index}>
                        {genre}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {book.collection && (
              <div>
                <h2 className="font-semibold">Coleção</h2>
                <p className="text-sm">{book.collection}</p>
              </div>
            )}
            <div className="flex justify-end items-center gap-2">
              {isAuthenticated && !isPreviw && (
                <>
                  <CiEdit
                    onClick={() => setIsEditModalOpen(true)}
                    className="hover:cursor-pointer hover:text-gray-500 transition-colors duration-300"
                    size={"20px"}
                  />
                  <FaRegTrashAlt
                    onClick={handleDeleteBook}
                    className="hover:cursor-pointer hover:text-red-500 transition-colors duration-300"
                    size={"20px"}
                  />
                </>
              )}
              {isAuthenticated && book.pdf && (
                <a href={book.pdf as string} target="_blank">
                  <FaRegFilePdf
                    className="hover:cursor-pointer"
                    size={"20px"}
                  />
                </a>
              )}
              <PiDeviceRotateFill
                onClick={toggleFlip}
                className="hover:cursor-pointer"
                size={"20px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
