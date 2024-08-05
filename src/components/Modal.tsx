import { ReactNode } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <section className="flex justify-center items-center h-full w-full fixed top-0 left-0 bg-transparent backdrop-blur-sm z-30">
          <div className="overflow-y-scroll whitespace-pre-line flex flex-col items-center gap-8 bg-mainWhite dark:bg-mainBlack border shadow-light dark:shadow-dark rounded-md border-mainBlack dark:border-mainWhite p-8 w-full h-full max-w-[90%] max-h-[90%] relative">
            {children}
            <FontAwesomeIcon
              className="absolute top-4 right-4 hover:cursor-pointer"
              onClick={onClose}
              icon={faXmark}
            />
          </div>
        </section>
      )}
    </>
  );
};