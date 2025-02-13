import "@/styles/tailwind.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xeventy2.0 Health Limited",
  description: "Xeventy2.0 Health is a web app designed for heallth, telehealt, EMR, electronic health records",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
