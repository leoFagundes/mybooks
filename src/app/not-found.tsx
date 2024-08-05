"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <h1 className="text-8xl">404</h1>
      <div className="flex justify-center flex-col text-center">
        <p>Oops, não conseguimos encontrar essa página!</p>
        <p>Clique no botão abaixo para ser redirecionado à Página Inicial.</p>
      </div>
      <Button onClick={() => router.push("/")}>Voltar</Button>
    </div>
  );
}
