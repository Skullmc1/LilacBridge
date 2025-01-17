// components/Layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { Home, User, Folder, Mail } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEEEEE]">
      {/* Header */}
      <header className="bg-[#3B1E54] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            LilacBridge
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-[#D4BEE4]"
            >
              <Home size={20} /> Home
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 hover:text-[#D4BEE4]"
            >
              <Folder size={20} /> Projects
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 hover:text-[#D4BEE4]"
            >
              <User size={20} /> About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-[#D4BEE4]"
            >
              <Mail size={20} /> Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-[#3B1E54] text-white p-4 text-center">
        <p>© 2023 LilacBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}
