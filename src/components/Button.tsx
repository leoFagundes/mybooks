import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  onlyStroke?: boolean;
  leftIcon?: ReactNode | undefined;
  rightIcon?: ReactNode | undefined;
}

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  onlyStroke = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${
        onlyStroke && "hover:font-semibold"
      } hover:cursor-pointer flex justify-center items-center min-w-[150px] py-2 px-4 rounded-lg whitespace-nowrap gap-2 ${
        onlyStroke
          ? "shadow-light dark:shadow-dark border border-mainBlack text-mainBlack dark:border-mainWhite dark:text-mainWhite"
          : "bg-mainBlack text-mainWhite dark:bg-mainWhite dark:text-mainBlack"
      } ${(leftIcon || rightIcon) && "justify-between"} `}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && leftIcon}
    </button>
  );
};
