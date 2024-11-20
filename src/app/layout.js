import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
