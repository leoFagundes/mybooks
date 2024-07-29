import { BooksLogo } from "@/components/BooksLogo";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center gap-12">
      <div className="flex flex-col gap-6 w-full sm:w-1/2">
        <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl leading-none">Um repositório ideal para seus livros</h1>
        <p className="text-sm xl:text-lg">
        MyBooks é um site para que você possa ter sua coleção de livros em um só lugar de forma prática e agradável!
        </p>
        <input type="text" />
      </div>
      <div className="hidden sm:block w-1/2 min-w-[300px]">
        <BooksLogo />
      </div>
    </main>
  );
}
