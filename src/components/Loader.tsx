"use client";

import { useState, useEffect } from "react";

export const Loader = ({
  message = "Isso pode demorar um pouco na primeira vez...",
}) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center flex-col gap-4 justify-center w-full h-full absolute top-0 left-0 bg-transparent backdrop-blur-md z-30">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-mainBlack dark:bg-mainWhite animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-mainBlack dark:bg-mainWhite animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-mainBlack dark:bg-mainWhite animate-bounce [animation-delay:-.5s]"></div>
      </div>
      {showText && (
        <p className="animate-shade-in max-w-[500px] text-center">{message}</p>
      )}
    </div>
  );
};
