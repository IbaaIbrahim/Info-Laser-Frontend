import "./globals.css";
import {ptSans} from './fonts'
import React from "react";
import {CartProvider} from "@/context/Cart-context";

export default function GlobalLayout(
  {
    children,
  }:
  Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">

    <head>
      <link data-rh="true" rel="icon" href="/favicon.ico"/>
      <title>InfoLaser</title>
    </head>

    <body className={ptSans.className}>

    <CartProvider>
      {children}
    </CartProvider>
    </body>
    </html>
  );
}


