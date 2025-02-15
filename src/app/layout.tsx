import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/provider/ClientProvider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JK-PPT",
  description: "Generated for building presentations",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientProviders> {/* Move client-side logic here */}
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
