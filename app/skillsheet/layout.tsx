// app/skillsheet/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SkillsheetLayout from "./SkillsheetLayout"; // Import the Client Component

// Configure the Inter font
const inter = Inter({ subsets: ["latin"] });

// Configure the Poppins font
const poppins = Poppins({
  weight: ["400", "500", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: "SkillSheet", // Updated project name
  description:
    "Customizable Resume Builder with live preview and PDF download.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <SkillsheetLayout>{children}</SkillsheetLayout>
      </body>
    </html>
  );
}
