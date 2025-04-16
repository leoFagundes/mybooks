import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ConnectDB } from "@/components/ConnectDB";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBooks",
  description: "Repository for your books!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-bt">
      <body
        className={`${saira.className} flex justify-center bg-mainWhite text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-full min-h-screen transition-all ease-in duration-100`}
      >
        <ConnectDB />
        <header className="flex justify-center absolute w-full bg-transparent backdrop-blur-sm z-20">
          <NavBar />
        </header>
        <div className="w-[90%] sm:w-2/3 max-w-[1200px]">{children}</div>
      </body>
    </html>
  );
}
