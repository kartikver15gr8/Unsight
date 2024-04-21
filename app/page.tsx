"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <main className="flex flex-col space-y-6 items-center justify-center h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h2 className="text-white text-4xl font-bold">
        Email Provider Authentication
      </h2>
      {session.data ? (
        <div>
          <Link href="/signIn"></Link>
          <Button
            onClick={() => {
              signOut();
            }}
          >
            logout
          </Button>
        </div>
      ) : (
        <div>
          <Link href="/signIn">
            <Button className="" variant="outline" size="lg">
              Sign in with Magic Link
            </Button>
          </Link>
        </div>
      )}
    </main>
  );
}
