import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AccentProvider } from "@/providers/accent";
import Header from "@/components/nav/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hexleap Assignment",
  description: "Created with NextJS + Tailwind + Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AccentProvider>
        <body className={`${poppins.className} dark`}>
          <Header />

          {children}
        </body>
      </AccentProvider>
    </html>
  );
}
