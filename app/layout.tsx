import "./globals.css";
import {manrope} from "./fonts";
import React from "react";
import {CartProvider} from "@/context/Cart-context";
import {cn} from "@/lib/utils";
import {Toaster} from "react-hot-toast";

export default function GlobalLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <head>
      <link data-rh="true" rel="icon" href="/favicon.ico"/>
      <title>InfoLaser</title>
      <meta name="robots" content="noindex, nofollow"/>
    </head>
    <body className={cn("min-h-screen", manrope.className)}>
    <Toaster position="top-right"/>
    <CartProvider>
      {children}
    </CartProvider>
    </body>
    </html>
  );
}
