import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lili-blond.vercel.app"),
  title: "LILI",
  description: "LILI Band - Alternative Rock",
  openGraph: {
    title: "LILI",
    description: "LILI Band - Alternative Rock",
    images: [
      {
        url: "/img/logo.png",
        width: 512,
        height: 512,
        alt: "LILI Band Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LILI",
    description: "LILI Band - Alternative Rock",
    images: ["/img/logo-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
