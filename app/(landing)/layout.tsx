import "@/app/globals.css";
import type { Metadata } from "next";
import Header from "./_components/header/header";
import { font } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "LMS Website",
    template: "%s | LMS Website",
  },
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-muted/50 antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
