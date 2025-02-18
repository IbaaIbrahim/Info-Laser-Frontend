import type {Metadata} from "next";
import {Header} from "@/components/shared/header/Header";
import React from "react";
import {Footer} from "@/components/shared/footer/Footer";

export const metadata: Metadata = {
  title: "InfoLaser",
  description: "Тут заполняется СЕО",
};

export default function RootLayout(
  {
    children,
  }:
  Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <>
      <Header/>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer/>
    </>

  );
}
