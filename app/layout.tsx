import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const revalidate = 0
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppi-M",
  description: "Site de E-com",
  icons: {
    icon: [
      {
        
        url: "/icons8-buy-with-card-96.png",
        href: "/icons8-buy-with-card-96.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
