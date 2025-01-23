// app/ClientLayout.tsx
"use client"; // This is a Client Component

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Skip ClientLayout for the skillsheet project
  if (pathname.startsWith("/skillsheet")) {
    return <>{children}</>;
  }

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
    <>
      <Header currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
