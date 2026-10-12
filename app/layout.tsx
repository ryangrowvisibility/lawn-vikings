import type { Metadata } from "next";
import { Lexend, Nunito_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lawn Vikings | Lawn Care & Landscaping in Bolton and Caledon",
  description:
    "Lawn mowing, landscape design, sod, seeding, mulching, yard and winter clean-ups and custom seasonal planters in Bolton and Caledon. 5.0 stars on Google. Upfront pricing from owner Eric Polujanski: (437) 331-8135.",
  openGraph: {
    title: "Lawn Vikings | Bolton & Caledon Lawn Care and Landscaping",
    description: "Upfront pricing, tidy job sites, 5.0 stars on Google. Call Eric at (437) 331-8135.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lexend.variable} ${nunito.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
