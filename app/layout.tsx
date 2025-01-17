// app/layout.tsx
"use client"; // This is a Client Component

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

// Optional: Add a custom font (e.g., Inter from Google Fonts)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine the current page based on the pathname
  const currentPage =
    pathname === "/"
      ? "home"
      : pathname === "/projects"
        ? "projects"
        : pathname === "/about"
          ? "about"
          : pathname === "/contact"
            ? "contact"
            : "home";

  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-primary`}>
        <Header currentPage={currentPage} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
