// app/skillsheet/SkillsheetLayout.tsx
"use client"; // Mark as a Client Component for interactivity

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function SkillsheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Show Preloader while loading */}
      {isLoading && <Preloader />}

      {/* Show Header, Main Content, and Footer after loading */}
      {!isLoading && (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
