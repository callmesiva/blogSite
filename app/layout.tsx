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
  title: "Wolvio | Veeva Consulting & Managed Services for Life Sciences",
  description:
    "Wolvio delivers specialist Veeva Vault Consulting & managed services for pharma, biotech, medtech combining GxP compliant implementation with expert-led delivery",
  keywords: [
    "Wolvio",
    "Veeva Vault consulting",
    "pharma consulting",
    "biotech consulting",
    "med tech consulting",
    "digital solutions",
  ],
  openGraph: {
    title: "Wolvio | Veeva Consulting & Managed Services for Life Sciences",
    description:
      "Wolvio delivers specialist Veeva Vault Consulting & managed services for pharma, biotech, medtech combining GxP compliant implementation with expert-led delivery ",
    url: "https://www.wolvio.com",
    siteName: "Wolvio",
    type: "website",
  },
}

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
