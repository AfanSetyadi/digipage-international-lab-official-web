import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digipage International Lab — PT Digital Landing Teknologi",
  description:
    "Digipage International Lab (PT Digital Landing Teknologi) — Startup inovatif berfokus pada riset dan pengembangan bisnis mutakhir di bidang software, data, dan AI.",
  icons: { icon: "/images/logo-pt.png", apple: "/images/logo-pt.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-[#0a0f1e] text-gray-800 dark:text-gray-200 antialiased transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
