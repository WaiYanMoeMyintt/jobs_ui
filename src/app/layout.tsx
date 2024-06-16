import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome Job Board",
  description: "Create job post and customize it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="py-4 px-6  mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
