// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientLayout from "./ClientLayout"; // New Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LilacBridge",
  description:
    "LilacBridge is a collective of passionate developers dedicated to building innovative and creative solutions. Explore our projects and join us on our journey.",
  keywords: [
    "LilacBridge",
    "developers",
    "web development",
    "creative solutions",
    "innovation",
  ],
  authors: [{ name: "LilacBridge Team" }],
  openGraph: {
    title: "LilacBridge",
    description:
      "LilacBridge is a collective of passionate developers dedicated to building innovative and creative solutions.",
    type: "website",
    url: "https://www.lilacbridge.com",
    images: [
      {
        url: "https://www.lilacbridge.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LilacBridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LilacBridge",
    description:
      "LilacBridge is a collective of passionate developers dedicated to building innovative and creative solutions.",
    images: ["https://www.lilacbridge.com/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-primary`}>
        {/* Wrap children in a Client Component to handle usePathname */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
