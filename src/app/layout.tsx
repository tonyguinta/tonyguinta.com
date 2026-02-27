import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://tonyguinta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tony Guinta — Director of Software Engineering",
    template: "%s | Tony Guinta",
  },
  description:
    "Director of Software Engineering. Built an enterprise financial platform solo, then led the team that scaled it. 18 years at a Fortune 5 company. AI-native builder.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tony Guinta",
    title: "Tony Guinta — Director of Software Engineering",
    description:
      "Built an enterprise financial platform solo, then led the team that scaled it. 18 years at a Fortune 5 company. AI-native builder.",
    images: [
      {
        url: "/images/headshot.jpg",
        width: 800,
        height: 800,
        alt: "Tony Guinta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Guinta — Director of Software Engineering",
    description:
      "Built an enterprise financial platform solo, then led the team that scaled it. 18 years at a Fortune 5 company. AI-native builder.",
    creator: "@TonyGuinta",
    images: ["/images/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen pt-[73px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
