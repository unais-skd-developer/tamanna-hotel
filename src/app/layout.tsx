import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Jost, Poppins } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  metadataBase: new URL("https://tamannahotels.com"),
  title: "Tamanna Hotels | Best Hotels & Banquets in Hinjawadi Pune",
  description:
    "First hotel established in Hinjawadi IT Park, Pune. Experience luxury hospitality across Grand Tamanna, Premier Tamanna, Bizz Tamanna, Executive Tamanna, Shree Inn, and Imperial Tamanna.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-[#1068a8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
