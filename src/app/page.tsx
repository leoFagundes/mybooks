import { BooksLogo } from "@/components/BooksLogo";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center gap-12">
      <div className="flex flex-col gap-6 w-full sm:w-[40%]">
        <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl leading-none">
          O repositório ideal para seus livros
        </h1>
        <p className="text-sm xl:text-lg">
          MyBooks é um site para que você possa ter sua coleção de livros em um
          só lugar de forma prática e agradável!
        </p>
        <Input />
      </div>
      <div className="hidden sm:block w-[60%] min-w-[300px]">
        <BooksLogo />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center py-3">
        <p className="text-sm italic">
          Observação: Todos os PDFs são exclusivamente visíveis para seus
          respectivos proprietários.
        </p>
      </div>
    </main>
  );
}
