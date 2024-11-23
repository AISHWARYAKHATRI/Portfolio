import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsFontBlack = localFont({
  src: "./fonts/PoppinsBlack.ttf",
  variable: "--font-poppins-black",
  weight: "100 900",
});

const poppinsFontReg = localFont({
  src: "./fonts/PoppinsRegular.ttf",
  variable: "--font-poppins-reg",
  weight: "100 900",
});

const sacramento = localFont({
  src: "./fonts/SacramentoRegular.ttf",
  variable: "--font-sacramento",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sacramento.variable} ${poppinsFontBlack.variable} ${poppinsFontReg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
