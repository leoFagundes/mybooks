"use client";

import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import Tooltip from "./Tooltip";

export default function TooltipConfig() {
  const [tooltipState, setTooltipState] = useState(() => {
    return localStorage.getItem("tooltipState") || "true";
  });

  const changeTooltipState = () => {
    if (tooltipState === "true") {
      localStorage.setItem("tooltipState", "false");
      setTooltipState("false");
    }

    if (tooltipState === "false") {
      localStorage.setItem("tooltipState", "true");
      setTooltipState("true");
    }
  };

  return (
    <div
      className={`flex justify-center items-center absolute bottom-2 right-2 p-1 cursor-pointer rounded border border-mainBlack dark:border-mainWhite ${
        tooltipState === "false" &&
        "border-mainBlack/30 dark:border-mainWhite/30 border-dashed"
      }`}
      onClick={() => changeTooltipState()}
    >
      <Tooltip content={`Desativar balão de ajuda`} direction="left">
        <FiInfo
          className={`w-6 h-6 ${
            tooltipState === "false" &&
            "text-mainBlack/30 dark:text-mainWhite/30"
          }`}
        />
      </Tooltip>
    </div>
  );
}
