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
  title: "もったいない市｜とうふ工房まごころ屋・須賀食品",
  description:
    "毎週月・木・土曜日16:00〜開催。とうふ工房まごころ屋の「もったいない市」。対象商品30〜50%OFF、数量限定。埼玉県さいたま市岩槻区末田2587。",
  openGraph: {
    title: "もったいない市｜とうふ工房まごころ屋",
    description:
      "毎週月・木・土曜日16:00〜。対象商品30〜50%OFF、数量限定・なくなり次第終了。",
    type: "website",
    images: ["/images/mottainai-sale.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
