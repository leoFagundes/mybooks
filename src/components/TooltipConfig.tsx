"use client";

import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import Tooltip from "./Tooltip";

export default function TooltipConfig() {
  const [tooltipConfig, setTooltipConfig] = useState(() => {
    return localStorage.getItem("tooltipState") ?? "true";
  });

  useEffect(() => {
    localStorage.setItem("tooltipState", tooltipConfig);
  }, [tooltipConfig]);

  const changeTooltipState = () => {
    const tooltipState = localStorage.getItem("tooltipState");

    if (tooltipState === "true") {
      localStorage.setItem("tooltipState", "false");
      setTooltipConfig("false");
    }

    if (tooltipState === "false") {
      localStorage.setItem("tooltipState", "true");
      setTooltipConfig("true");
    }

    window.location.reload();
  };

  return (
    <div
      className={`flex justify-center items-center absolute bottom-2 right-2 p-1 cursor-pointer rounded border border-mainBlack dark:border-mainWhite ${
        tooltipConfig === "false" &&
        "border-mainBlack/30 dark:border-mainWhite/30 border-dashed"
      }`}
      onClick={() => changeTooltipState()}
    >
      <Tooltip content={`Desativar balão de ajuda`} direction="left">
        <FiInfo
          className={`w-6 h-6 ${
            tooltipConfig === "false" &&
            "text-mainBlack/30 dark:text-mainWhite/30"
          }`}
        />
      </Tooltip>
    </div>
  );
}
