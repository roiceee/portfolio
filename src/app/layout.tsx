import PageContainer from "@/components/containers/page-container";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "John Roice Aldeza",
    template: "%s | John Roice Aldeza",
  },
  description: "John Roice Aldeza's Dev Portfolio",
  keywords: [
    "John Roice Aldeza",
    "John Roice Aldeza's Dev Portfolio",
    "John Roice Aldeza's Portfolio",
    "John Roice Aldeza's Projects",
    "John Roice Aldeza's Skills",
    "John Roice Aldeza's Experience",
    "John Roice Aldeza's Certifications",
    "John Roice Aldeza's Education",
    "John Roice Aldeza's Contact",
    "full-stack developer",
    "web developer",
    "software developer",
    "software engineer",
    "front-end developer",
    "back-end developer",
  ],
  openGraph: {
    title: "John Roice Aldeza",
    description: "John Roice Aldeza's Dev Portfolio",
    images: [{ url: "https://johnroice.vercel.app/profile.png" }],
  },
  other: {
    "google-site-verification": "iAtxBoEBLzpHud-qRt-CaJnKqp04VaFSNtpbF3hXxOs",
  },
};

const font = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi" className={font.className}>
      <body>
        <div
          className="flex flex-col justify-start gap-1 relative"
          style={{ minHeight: "100vh" }}
        >
          <Navbar />
          <PageContainer>{children}</PageContainer>
          <Footer className={"mt-auto"} />
        </div>
      </body>
      <Analytics />
    </html>
  );
}
