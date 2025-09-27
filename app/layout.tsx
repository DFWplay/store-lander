// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Store Lander • Apparel Junction",
  description: "Landing pages with A/B testing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-neutral-900" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

