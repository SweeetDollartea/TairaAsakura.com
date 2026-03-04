import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { OverlayProvider } from "@/contexts/OverlayContext";
import { ProjectDetailOverlay } from "@/components/ProjectDetailOverlay";
import { OverlayTrigger } from "@/components/OverlayTrigger";

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
        <div className="page-container">
          <OverlayProvider>
            <ProjectDetailOverlay />
            <OverlayTrigger />
            {children}
            <Footer />
          </OverlayProvider>
        </div>
      </body>
    </html>
  );
}
