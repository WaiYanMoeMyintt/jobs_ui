import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header>
          <div className="flex justify-between p-4 px-6 container mx-auto">
            <Link href="/" className="font-bold">Job Board</Link>
            <nav className="flex gap-4">
              <Link href={"/login"}>Login</Link>
              <Link href={"/new-listing"}>Post a Job</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
