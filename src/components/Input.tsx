"use client";

import { ChangeEvent, ComponentProps, ReactNode, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface InputProps extends ComponentProps<"input"> {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: ReactNode | undefined;
  type?: string;
}

export const Input = ({
  placeholder,
  value,
  setValue,
  icon,
  type = "text",
  ...props
}: InputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e);
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div className="flex items-center relative w-fit">
      {type !== "file" && (
        <input
          {...props}
          value={value}
          onChange={setValue}
          className={
            "bg-transparent w-[232px] rounded-md border border-mainBlack dark:border-mainWhite py-2 px-3 focus:outline-none shadow-sm focus:shadow-md"
          }
          type={type}
          placeholder={placeholder}
        />
      )}
      {type === "file" && (
        <div className="flex items-center justify-center w-56">
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
      <div className="absolute right-3 hover:cursor-pointer">
        {icon && icon}
      </div>
    </div>
  );
};
