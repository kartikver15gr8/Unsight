"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import Landing from "@/components/landing";
import Mainpage from "@/components/mainpage/mainpage";
import Update from "@/components/Update";

export default function Home() {
  // const session = useSession();
  return (
    <div className="">
      <div className="fixed mt-16 z-10">
        <Update />
      </div>
      <Navbar />
      <Mainpage />
    </div>
  );
}
