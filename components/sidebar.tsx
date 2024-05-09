"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE =
  "h-12 font-bold my-1 bg-slate-400 rounded-lg p-2 flex items-center";
const INACTIVE =
  "h-12 font-bold my-1 bg-black text-white rounded-lg p-2 flex items-center hover:bg-slate-600 transition-all duration-300";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-[20%] flex flex-col ">
      <div className=" p-4 border-b border-slate-200 ">
        {pathname === "/dashboard/feed" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Feed</p>
          </div>
        ) : (
          <Link href="/dashboard/feed">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Feed</p>
            </div>
          </Link>
        )}

        {pathname === "/dashboard/bookmarks" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none'%3E%3Cpath d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='black' d='M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22z'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Bookmarks</p>
          </div>
        ) : (
          <Link href="/dashboard/bookmarks">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none'%3E%3Cpath d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='white' d='M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22z'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Bookmarks</p>
            </div>
          </Link>
        )}
        {pathname === "/dashboard/explore" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 21q-1.863 0-3.506-.71t-2.857-1.927t-1.926-2.857T3 12t.71-3.506t1.927-2.857T8.494 3.71T12 3q3.496 0 6.032 2.307t2.903 5.699h-1.012q-.263-2.171-1.568-3.897T15 4.562V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h1.846v3H9l-4.8-4.8q-.075.45-.137.9T4 12q0 3.275 2.3 5.625T12 20zm9.023-.27l-3.45-3.41q-.448.318-.971.5T15.5 18q-1.471 0-2.486-1.014T12 14.5t1.014-2.486T15.5 11t2.486 1.014T19 14.5q0 .598-.19 1.13t-.53.982l3.45 3.411zM15.5 17q1.05 0 1.775-.725T18 14.5t-.725-1.775T15.5 12t-1.775.725T13 14.5t.725 1.775T15.5 17'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Explore</p>
          </div>
        ) : (
          <Link href="/dashboard/explore">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 21q-1.863 0-3.506-.71t-2.857-1.927t-1.926-2.857T3 12t.71-3.506t1.927-2.857T8.494 3.71T12 3q3.496 0 6.032 2.307t2.903 5.699h-1.012q-.263-2.171-1.568-3.897T15 4.562V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h1.846v3H9l-4.8-4.8q-.075.45-.137.9T4 12q0 3.275 2.3 5.625T12 20zm9.023-.27l-3.45-3.41q-.448.318-.971.5T15.5 18q-1.471 0-2.486-1.014T12 14.5t1.014-2.486T15.5 11t2.486 1.014T19 14.5q0 .598-.19 1.13t-.53.982l3.45 3.411zM15.5 17q1.05 0 1.775-.725T18 14.5t-.725-1.775T15.5 12t-1.775.725T13 14.5t.725 1.775T15.5 17'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Explore</p>
            </div>
          </Link>
        )}
        {pathname === "/dashboard/profile" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='black' fillRule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0'/%3E%3Cpath d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Profile</p>
          </div>
        ) : (
          <Link href="/dashboard/profile">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='white' fillRule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0'/%3E%3Cpath d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Profile</p>
            </div>
          </Link>
        )}
      </div>
      <div className="p-6">
        <p className="font-bold h-12 text-white">INDUSTRIES</p>
        <ul>
          <li className="h-12 text-slate-300 px-2">Tech</li>
          <li className="h-12 text-slate-300 px-2">Healthcare</li>
          <li className="h-12 text-slate-300 px-2">Financial Services</li>
        </ul>
        <div className="h-12 text-slate-300 flex justify-between items-center border-slate-400 border rounded-xl p-4">
          <p>Show more</p>
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="white"
                d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
