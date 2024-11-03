import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Lato } from "next/font/google";
import PageContainer from "@/components/containers/page-container";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    template: "%s | John Roice Aldeza"
  },
  description: "John Roice Aldeza's Dev Portfolio",
};

const font = Lato({ subsets: ["latin"], weight: "400" });

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
