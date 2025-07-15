import type { Metadata } from "next";
import "./globals.css";
import { funnelSans } from "@/lib/font";

export const metadata: Metadata = {
  title: "BS Shop",
  description: "BS Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${funnelSans.className}`}>{children}</body>
    </html>
  );
}
