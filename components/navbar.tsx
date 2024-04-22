"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  return (
    <div className="flex w-full justify-between bg-slate-100 h-14 shadow-md fixed z-20  backdrop-blur-lg bg-[rgba(0,0,0,0)]">
      <div className="flex items-center ml-5">
        <Link href="/">
          <img
            className="w-16"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 72 72'%3E%3Ccircle cx='36' cy='36' r='28' fill='%23023262'/%3E%3Ccircle r='18' fill='%231F72AF' transform='matrix(-1 0 0 1 36 36)'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' d='M54.125 36c0-2.118-.363-4.152-1.031-6.042c-2.489-7.04-9.202-12.083-17.094-12.083'/%3E%3Ccircle cx='36' cy='36' r='10' fill='%2399FCFF'/%3E%3Ccircle cx='36' cy='36' r='5' fill='%231F305E'/%3E%3Ccircle cx='36' cy='36' r='28' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E"
            alt=""
          />
        </Link>
        <Input
          className="rounded-full bg-slate-200 mx-4 shadow-inner  "
          placeholder="search"
        />
      </div>
      <div className="items-center flex mx-2">
        <ul className="flex">
          <li className="mx-6 flex flex-col items-center ">
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='black'%3E%3Cpath d='M17 21H7a2 2 0 0 1-2-2v-9l7-7l7 7v9a2 2 0 0 1-2 2' opacity='0.16'/%3E%3Cpath d='M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <p className="text-sm">Community</p>
          </li>
          <li className="mx-6 flex flex-col items-center">
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='black' stroke-width='2' d='m12 3l9 4.5l-9 4.5l-9-4.5zm4.5 7.25L21 12.5L12 17l-9-4.5l4.5-2.25m9 5L21 17.5L12 22l-9-4.5l4.5-2.25'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="text-sm">Resources</p>
          </li>
          <li className="mx-6 flex flex-col items-center">
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm7.075-7.75L12 12.475l2.925 1.775l-.775-3.325l2.6-2.25l-3.425-.275L12 5.25L10.675 8.4l-3.425.275l2.6 2.25z'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="text-sm">Reviews</p>
          </li>
          <li className="mx-6 flex flex-col items-center">
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M18 8.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.91 3.91 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31c-.07.08-.15.13-.22.2c-3-2.41-6.29-3.77-7.9-2.16a2.16 2.16 0 0 0-.41.59v.1l-.18.53l-4.41 13.1A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17L20 17.28a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9V7a8.44 8.44 0 0 0-5 1.31M5.7 19.93a1.29 1.29 0 0 1-1.63-1.63l1.36-4.1a10.7 10.7 0 0 0 4.29 4.39zm7-2.33a8.87 8.87 0 0 1-6.3-6.29l1-3l.06.09c.11.22.25.45.39.68s.16.29.26.44s.33.48.51.73s.19.28.3.42s.43.55.66.82l.29.35c.34.39.7.77 1.08 1.16s.68.64 1 1l.33.28l.78.63l.37.28c.28.2.55.4.83.58l.31.2c.36.22.72.43 1.07.61h.05zm6.51-2.23h-.06c-.69.38-3.56-.57-6.79-3.81c-.34-.34-.66-.67-.95-1l-.29-.35l-.53-.64l-.29-.4c-.13-.19-.27-.37-.39-.55l-.26-.42l-.29-.47c-.08-.14-.14-.27-.21-.4s-.15-.26-.21-.4a3.31 3.31 0 0 1-.14-.36c-.05-.13-.11-.26-.15-.38S8.6 6 8.57 5.88s-.05-.22-.07-.32a2.26 2.26 0 0 1 0-.26a1 1 0 0 1 0-.24l.11-.31c.36-.36 2.23 0 4.73 1.9A4.13 4.13 0 0 1 12 7v2a6.45 6.45 0 0 0 3-.94l.48.46c.42.42.81.85 1.18 1.28a5.32 5.32 0 0 0-.6 3.4l2-.39a3.57 3.57 0 0 1 0-1.12a11.3 11.3 0 0 1 .81 1.45c.56 1.32.52 2.06.34 2.23'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="text-sm">Opportunities</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center mr-5">
        {session.data ? (
          <div>
            <Link href="/dashboard">
              <Button className="bg-transparent text-black hover:bg-slate-400 transition-all duration-300 mx-2">
                dashboard
              </Button>
            </Link>
            <Button
              onClick={() => {
                signOut();
              }}
              className="hover:bg-sky-800 transition-all duration-300 mx-2"
            >
              logout
            </Button>
          </div>
        ) : (
          <div>
            <Link href="/signIn">
              <Button className="bg-transparent text-black hover:bg-slate-400 transition-all duration-300 mx-2">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="hover:bg-sky-800 transition-all duration-300 mx-2">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
