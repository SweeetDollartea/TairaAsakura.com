import type { Metadata } from "next";
import "./globals.css";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { ScrollRestore } from "@/components/ScrollRestore";

export const metadata: Metadata = {
  title: "Taira Asakura",
  description: "Portfolio & design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollRestore>
          <div className="page-container">
            {children}
            <ConditionalFooter />
          </div>
        </ScrollRestore>
      </body>
    </html>
  );
}
