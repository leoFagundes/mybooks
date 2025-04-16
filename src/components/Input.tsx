"use client";

import { ChangeEvent, ComponentProps, ReactNode, useState } from "react";
import { FiX } from "react-icons/fi";
import { IoCloudUploadOutline } from "react-icons/io5";
import Tooltip from "./Tooltip";

interface InputProps extends ComponentProps<"input"> {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: ReactNode | undefined;
  type?: string;
  options?: string[];
  tooltipIconMessage?: string;
}

export const Input = ({
  placeholder,
  value,
  setValue,
  icon,
  type = "text",
  options,
  tooltipIconMessage,
  ...props
}: InputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e);
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="flex items-center relative w-fit">
      {type !== "file" && (
        <>
          <input
            {...props}
            value={value}
            onFocus={() => setIsBoxOpen(true)}
            onBlur={() => {
              setTimeout(() => {
                setIsBoxOpen(false);
              }, 100);
            }}
            onChange={setValue}
            className={`bg-transparent w-[232px] rounded-md border border-mainBlack dark:border-mainWhite ${
              icon && "border-r-0"
            } py-2 px-3 focus:outline-none shadow-md`}
            type={type}
            placeholder={placeholder}
          />
          {value && (
            <span className="absolute -top-2 left-2 text-xs font-medium px-2 bg-mainWhite dark:bg-mainBlack transition-all ease-in duration-100">
              {placeholder}
            </span>
          )}
        </>
      )}
      {type === "file" && (
        <div className="flex items-center justify-center w-[232px]">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full border-2 border-gray-500 
            border-dashed rounded-lg cursor-pointer bg-mainWhite dark:bg-mainBlack hover:bg-gray-200 
            dark:border-gray-600 dark:hover:border-gray-500 "
          >
            <div className="flex flex-col items-center justify-center p-3">
              <IoCloudUploadOutline size={"24px"} />
              {fileName ? (
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {fileName}
                </p>
              ) : (
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> your
                  PDF
                </p>
              )}
            </div>
            <input
              {...props}
              onChange={handleFileChange}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      )}
      {icon && (
        <>
          {tooltipIconMessage ? (
            <Tooltip content={tooltipIconMessage ?? ""} direction="bottom">
              <div
                className={`hover:cursor-pointer py-2 px-3 border border-mainBlack dark:border-mainWhite rounded-md shadow-md border-l-0`}
              >
                {icon}
              </div>
            </Tooltip>
          ) : (
            <div
              className={`hover:cursor-pointer py-2 px-3 border border-mainBlack dark:border-mainWhite rounded-md shadow-md border-l-0`}
            >
              {icon}
            </div>
          )}
        </>
      )}
      {filteredOptions && filteredOptions.length > 0 && isBoxOpen && (
        <div className="flex flex-col gap-1 w-full absolute dark:bg-mainBlack bg-mainWhite top-full p-2 min-h-12 max-h-[200px] overflow-y-auto z-30 border dark:border-mainWhite border-mainBlack border-t-mainWhite dark:border-t-mainBlack rounded-br-md rounded-bl-md shadow-light">
          {filteredOptions?.map((option, index) => (
            <p
              className="cursor-pointer w-[90%] hover:bg-mainBlack hover:text-mainWhite dark:hover:text-mainBlack dark:hover:bg-mainWhite px-2 py-1 rounded-sm hover:shadow-light dark:hover:shadow-dark"
              key={index}
              onClick={() => {
                setValue({
                  target: { value: option },
                } as React.ChangeEvent<HTMLInputElement>);
                setIsBoxOpen(false);
              }}
            >
              {option}
            </p>
          ))}
          <FiX
            className="absolute top-2 right-2 w-5 h-5 cursor-pointer bg-mainWhite dark:bg-mainBlack rounded-md"
            onClick={() => setIsBoxOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
