import type { PropsWithChildren } from "react";
import { Header } from "../header/Header";
import { clsx } from "clsx";
import { Inter } from "@next/font/google";
import { Footer } from "../footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className={clsx("flex min-h-screen flex-col px-9", inter.variable)}>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};
