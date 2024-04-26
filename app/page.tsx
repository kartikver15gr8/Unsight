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

export default function Home() {
  // const session = useSession();
  return (
    <div className="">
      <Navbar />
      <Mainpage />
    </div>
  );
}
