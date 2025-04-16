"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type TooltipProps = {
  children: ReactNode;
  content: string;
  direction?: "top" | "right" | "left" | "bottom";
};

export default function Tooltip({
  children,
  content,
  direction = "top",
}: TooltipProps) {
  const tooltipPosition = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowPosition = {
    top: "top-full left-1/2 -translate-x-1/2",
    bottom: "bottom-full left-1/2 -translate-x-1/2",
    left: "left-full top-1/2 -translate-y-1/2",
    right: "right-full top-1/2 -translate-y-1/2",
  };

  return (
    <div className={`relative group flex items-center justify-center `}>
      {children}

      <div
        className={clsx(
          "absolute hidden group-hover:flex bg-mainBlack dark:bg-mainWhite dark:text-mainBlack text-mainWhite text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all animate-shade-in z-10",
          tooltipPosition[direction]
        )}
      >
        {content}
        <div
          className={clsx(
            "absolute w-2 h-2 rotate-45 bg-mainBlack dark:bg-mainWhite",
            arrowPosition[direction]
          )}
        />
      </div>
    </div>
  );
}
