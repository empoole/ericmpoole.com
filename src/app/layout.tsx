import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric M. Poole | Full Stack Engineer",
  description:
    "Personal website for Eric M. Poole, a full stack software engineer based in New Jersey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
