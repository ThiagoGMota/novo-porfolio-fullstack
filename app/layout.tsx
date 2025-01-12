import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "./components/cursosr";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thiago Dev",
  description: "Programador frontend. Especializado em construção de sites responsivos e aplicativos web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <header>
        <meta name="google-site-verification" content="pjDReKOQqu5GI43HLYZmEDJ442ScYsOEhP_bJiS3L2Y" />
      </header>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
