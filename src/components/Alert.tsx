import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type AlertType = {
  isAlertOpen: boolean;
  message: string;
  alertDisplayTime: number;
  onClose: () => void;
};

export function Alert({
  isAlertOpen,
  message,
  alertDisplayTime,
  onClose,
}: AlertType) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, alertDisplayTime);

    return () => clearTimeout(timeout);
  }, [alertDisplayTime, onClose]);

  return isAlertOpen ? (
    <div className="absolute top-0 left-0 p-3 flex justify-center w-full">
      <div
        className={`animate-shade-in absolute flex justify-between items-center max-w-64 min-w-40 gap-2 rounded-md p-3 bg-mainWhite dark:bg-mainBlack border border-mainBlack dark:border-mainWhite`}
      >
        <p>{message}</p>
        <IoMdClose
          size={"20px"}
          className="hover:cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  ) : null;
}
