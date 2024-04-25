import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Landing from "@/components/landing";
import Explorebar from "@/components/explorebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Unsight",
  description: "Share your thoughts freely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex min-h-screen pt-14 justify-center bg-black">
          <Sidebar />
          {children}
          <Explorebar />
        </div>
      </body>
    </html>
  );
}
