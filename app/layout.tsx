import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jeshua Herrera — Developer Portfolio",
  description: "CS student building practical software in AI, security & data.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jeshua Herrera — Developer Portfolio",
    description: "CS student building practical software in AI, security & data.",
    type: "website",
    images: [
      {
        url: "/headshot.jpg",
        width: 280,
        height: 280,
        alt: "Jeshua Herrera",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Jeshua Herrera — Developer Portfolio",
    description: "CS student building practical software in AI, security & data.",
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
