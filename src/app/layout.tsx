import type { Metadata } from "next";
import { Bebas_Neue, Jost, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tamanna Hotels | Best Hotels & Banquets in Hinjawadi Pune",
  description:
    "First hotel established in Hinjawadi IT Park, Pune. Experience luxury hospitality across Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn, and Imperial Tamanna.",
  icons: {
    icon: "/images/extracted/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${jost.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#1068a8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
