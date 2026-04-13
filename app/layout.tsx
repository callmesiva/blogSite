import type { Metadata } from "next";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wolvio.com"),
  title: "Wolvio | Specialist Veeva Consulting Services",
  description:
    "Wolvio delivers specialist Veeva Vault consulting services for pharma, biotech, and med tech teams with implementation, optimization, and post-go-live support.",
  keywords: [
    "Wolvio",
    "Veeva Vault consulting",
    "pharma consulting",
    "biotech consulting",
    "med tech consulting",
    "digital solutions",
  ],
  openGraph: {
    title: "Wolvio | Specialist Veeva Consulting Services",
    description:
      "Specialist Veeva Vault consulting services for pharma, biotech, and med tech teams.",
    url: "https://www.wolvio.com",
    siteName: "Wolvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolvio | Specialist Veeva Consulting Services",
    description:
      "Specialist Veeva Vault consulting services for pharma, biotech, and med tech teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`site-main min-h-full flex flex-col ${inter.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
