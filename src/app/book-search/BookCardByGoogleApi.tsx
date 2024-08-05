"use client";

import { Loader } from "@/components/Loader";
import { Modal } from "@/components/Modal";
import { BookVolume } from "@/types";
import { ComponentProps, useState } from "react";
import { CiImageOff } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";
import { PiDeviceRotateFill } from "react-icons/pi";

interface BookCardProps extends ComponentProps<"div"> {
  book: BookVolume;
}

export const BookCardByGoogleApi = ({ book, ...props }: BookCardProps) => {
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
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
          className={`card-front rounded-sm shadow-light dark:shadow-dark absolute w-full h-full backface-hidden hover:cursor-pointer`}
        >
          {book.volumeInfo.imageLinks?.smallThumbnail ? (
            <img
              className="h-full w-full bg-cover rounded-sm"
              src={book.volumeInfo.imageLinks.smallThumbnail}
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
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {book.volumeInfo.description}
          </Modal>
          <h1 className="text-xl text-center w-full font-bold">
            {book.volumeInfo.title}
          </h1>
          {book.volumeInfo.description && (
            <div className="flex flex-col">
              <h2 className="font-semibold">Descrição</h2>
              <p className="text-sm overflow-hidden text-ellipsis line-clamp-3 ">
                {book.volumeInfo.description}
              </p>
              <span
                onClick={() => setIsOpen(true)}
                className="flex justify-end text-sm italic hover:text-gray-500 hover:cursor-pointer"
              >
                Ver mais
              </span>
            </div>
          )}
          <div className="flex justify-between">
            {book.volumeInfo.authors &&
              book.volumeInfo.authors.length > 0 &&
              book.volumeInfo.authors[0] !== "" && (
                <div>
                  <h2 className="font-semibold">Autor</h2>
                  <p className="flex flex-col text-sm">
                    {book.volumeInfo.authors.map((author, index) => (
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
            {book.volumeInfo.averageRating && (
              <div>
                <h2 className="font-semibold">Nota média</h2>
                <p className="text-sm">{book.volumeInfo.averageRating}/5</p>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            {book.volumeInfo.categories &&
              book.volumeInfo.categories.length > 0 &&
              book.volumeInfo.categories[0] !== "" && (
                <>
                  <h2 className="font-semibold">Gêneros</h2>
                  <ul className="grid grid-cols-2">
                    {book.volumeInfo.categories.map((genre, index) => (
                      <li className="list-disc list-inside text-sm" key={index}>
                        {genre}
                      </li>
                    ))}
                  </ul>
                </>
              )}
          </div>
          <div className="flex justify-end items-center gap-2">
            {book.volumeInfo.previewLink && (
              <a href={book.volumeInfo.previewLink as string} target="_blank">
                <FaRegFilePdf className="hover:cursor-pointer" size={"20px"} />
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
  );
};
