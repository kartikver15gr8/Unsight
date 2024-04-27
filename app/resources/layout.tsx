import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Landing from "@/components/landing";
import Explorebar from "@/components/explorebar";
import Navbar from "@/components/navbar";
import SidePanel from "./sidepanel";

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
        <div className="flex min-h-screen pt-16 justify-center bg-black">
          <SidePanel />
          <div className="w-[50%] text-white pt-5">{children}</div>
          <Explorebar />
        </div>
      </body>
    </html>
  );
}
