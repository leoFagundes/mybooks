"use client";

import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { api } from "@/services/api";

export const ConnectDB = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function connectDB() {
      try {
        await api.get("");
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        setIsLoading(false);
      }
    }

    connectDB();
  }, []);

  if (isLoading) {
    return (
      <Loader message="Lamentamos pela demora. O carregamento inicial pode levar alguns segundos..." />
    );
  }

  return <></>;
};
