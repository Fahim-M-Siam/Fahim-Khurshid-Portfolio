import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fahim Khurshid",
  description:
    "MERN Stack Developer - Portfolio of Fahim Khurshid, a Computer Science graduate specializing in React, Node.js, and MongoDB.",
  keywords: [
    "Fahim Khurshid",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Fahim Khurshid" }],
  openGraph: {
    title: "Fahim Khurshid | MERN Stack Developer",
    description:
      "Computer Science graduate with 3+ years of experience in MERN stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
