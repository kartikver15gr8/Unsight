"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const IS_ACTIVE =
  "mx-6 flex flex-col items-center border-b-4 border-slate-300 hover:scale-110 transition-all duration-300 ";
const INACTIVE =
  "mx-6 flex flex-col items-center hover:scale-110 transition-all duration-300";

export default function Navbar() {
  const session = useSession();
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-between  h-16 shadow-md fixed z-20  backdrop-blur-lg bg-black bg-opacity-60">
      <div className="flex items-center ml-5">
        <Link href="/">
          <img
            className="w-14 mr-2 hover:rotate-180 transition-all duration-300"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'%3E%3Ccircle cx='36' cy='36' r='28' fill='%23023262'/%3E%3Ccircle r='18' fill='%231F72AF' transform='matrix(-1 0 0 1 36 36)'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='8' d='M54.125 36c0-2.118-.363-4.152-1.031-6.042c-2.489-7.04-9.202-12.083-17.094-12.083'/%3E%3Ccircle cx='36' cy='36' r='10' fill='%2399FCFF'/%3E%3Ccircle cx='36' cy='36' r='5' fill='%231F305E'/%3E%3Ccircle cx='36' cy='36' r='28' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E"
            alt=""
          />
        </Link>
        {/* <Input
          className="rounded-full bg-slate-200 mx-4 shadow-inner  "
          placeholder="search"
        /> */}
        <p className="text-4xl text-white font-bold hover:scale-105 transition-all duration-300">
          unsight
        </p>
      </div>

      <div className="items-center flex mx-2">
        <ul className="flex">
          <Link href="/dashboard/feed">
            <li
              className={pathname === "/dashboard/feed" ? IS_ACTIVE : INACTIVE}
            >
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='white'%3E%3Cpath d='M17 21H7a2 2 0 0 1-2-2v-9l7-7l7 7v9a2 2 0 0 1-2 2' opacity='0.16'/%3E%3Cpath d='M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="text-sm text-slate-300">Home</p>
            </li>
          </Link>
          <Link href="/resources/all">
            <li
              className={pathname === "/resources/all" ? IS_ACTIVE : INACTIVE}
            >
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999m-9.977 3.855L5.06 7.965l6.917-3.822l6.964 3.859z'/%3E%3Cpath fill='white' d='M20.515 11.126L12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z'/%3E%3Cpath fill='white' d='M20.515 15.126L12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="text-sm text-slate-300">Resources</p>
            </li>
          </Link>
          <Link href="/reviews">
            <li className={pathname === "/reviews" ? IS_ACTIVE : INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm7.075-7.75L12 12.475l2.925 1.775l-.775-3.325l2.6-2.25l-3.425-.275L12 5.25L10.675 8.4l-3.425.275l2.6 2.25z'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="text-sm text-slate-300">Reviews</p>
            </li>
          </Link>
          <Link href="/opportunities">
            <li
              className={pathname === "/opportunities" ? IS_ACTIVE : INACTIVE}
            >
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9zm-3.79 8.37h-.06c-.69.37-3.55-.57-6.79-3.81c-.34-.34-.66-.67-.95-1c-.1-.11-.19-.23-.29-.35l-.53-.64l-.28-.39c-.14-.19-.28-.38-.4-.56s-.16-.26-.24-.39s-.22-.34-.31-.51s-.13-.24-.19-.37s-.17-.28-.23-.42s-.09-.23-.14-.34s-.11-.27-.15-.4S8.6 6 8.58 5.9s-.06-.24-.08-.34a2 2 0 0 1 0-.24a1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37a13.83 13.83 0 0 1 2.49 1.54A4.17 4.17 0 0 1 12 7v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7M4.4 11l-2.23 6.7A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="text-sm text-slate-300">Opportunities</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex items-center mr-5">
        {session.data ? (
          <div>
            <Link href="/dashboard/feed">
              <Button className="bg-transparent text-white hover:bg-slate-300 hover:text-black transition-all duration-300 mx-2">
                dashboard
              </Button>
            </Link>
            <Button
              onClick={() => {
                signOut();
              }}
              className="hover:bg-[#4477ed] hover:text-black bg-[#023262] transition-all duration-300 mx-2"
            >
              logout
            </Button>
          </div>
        ) : (
          <div>
            <Link href="/signIn">
              <Button className="bg-transparent text-white hover:bg-slate-300 hover:text-black transition-all duration-300 mx-2">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="hover:bg-[#4477ed] hover:text-black bg-[#023262] transition-all duration-300 mx-2">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
