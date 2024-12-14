import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LMS Website",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
