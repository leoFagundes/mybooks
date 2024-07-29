import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

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
        className={`${saira.className} bg-mainWhite text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-full min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
