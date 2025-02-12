import "./globals.css";
import {ptSans} from './fonts'
import React from "react";

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
    {children}
    </body>
    </html>
  );
}
