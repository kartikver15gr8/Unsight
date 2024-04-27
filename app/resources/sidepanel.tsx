"use client";

import { Button } from "@react-email/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE =
  "h-12 font-bold my-1 bg-slate-400 rounded-lg p-2 flex items-center";
const INACTIVE =
  "h-12 font-bold my-1 bg-black text-white rounded-lg p-2 flex items-center hover:bg-slate-600 transition-all duration-300";

export default function SidePanel() {
  const pathname = usePathname();
  return (
    <div className="w-[20%] flex flex-col justify-between ">
      <div className=" p-4  border-slate-200 ">
        {pathname === "/resources/all" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">All</p>
          </div>
        ) : (
          <Link href="/resources/all">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">All</p>
            </div>
          </Link>
        )}

        {pathname === "/resources/webdev" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='black' d='M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">webdev</p>
          </div>
        ) : (
          <Link href="/resources/webdev">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">webdev</p>
            </div>
          </Link>
        )}
        {pathname === "/resources/blockchain" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.812M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17zM24 17v-7m6 17l7 4m-19-4l-7 4'/%3E%3Ccircle cx='24' cy='7' r='3'/%3E%3Ccircle cx='8' cy='33' r='3'/%3E%3Ccircle cx='40' cy='33' r='3'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Blockchain</p>
          </div>
        ) : (
          <Link href="/resources/blockchain">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.812M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17zM24 17v-7m6 17l7 4m-19-4l-7 4'/%3E%3Ccircle cx='24' cy='7' r='3'/%3E%3Ccircle cx='8' cy='33' r='3'/%3E%3Ccircle cx='40' cy='33' r='3'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Blockchain</p>
            </div>
          </Link>
        )}
        {pathname === "/resources/aiml" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath fill='black' fill-rule='evenodd' d='M8.75 4a.75.75 0 0 0-1.5 0v1.25H7A1.75 1.75 0 0 0 5.25 7v.25H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5h1.25V17c0 .966.784 1.75 1.75 1.75h.25V20a.75.75 0 0 0 1.5 0v-1.25h2.5V20a.75.75 0 0 0 1.5 0v-1.25h2.5V20a.75.75 0 0 0 1.5 0v-1.25H17A1.75 1.75 0 0 0 18.75 17v-.25H20a.75.75 0 0 0 0-1.5h-1.25v-2.5H20a.75.75 0 0 0 0-1.5h-1.25v-2.5H20a.75.75 0 0 0 0-1.5h-1.25V7A1.75 1.75 0 0 0 17 5.25h-.25V4a.75.75 0 0 0-1.5 0v1.25h-2.5V4a.75.75 0 0 0-1.5 0v1.25h-2.5zm-2 3A.25.25 0 0 1 7 6.75h10a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25V8zm5.049 7.753l-.275-.772H9.497l-.275.772a.75.75 0 0 1-1.413-.504l1.7-4.77l.003-.009l.004-.01c.152-.392.516-.711.994-.711c.479 0 .842.319.995.712l.003.009l.004.01l1.7 4.77a.75.75 0 0 1-1.413.503m-1.289-3.615l.479 1.343h-.958zm3.74-1.64a.75.75 0 0 1 1.5 0v5.003a.75.75 0 1 1-1.5 0z' clip-rule='evenodd'/%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">AI and ML</p>
          </div>
        ) : (
          <Link href="/resources/aiml">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M8.75 4a.75.75 0 0 0-1.5 0v1.25H7A1.75 1.75 0 0 0 5.25 7v.25H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5h1.25V17c0 .966.784 1.75 1.75 1.75h.25V20a.75.75 0 0 0 1.5 0v-1.25h2.5V20a.75.75 0 0 0 1.5 0v-1.25h2.5V20a.75.75 0 0 0 1.5 0v-1.25H17A1.75 1.75 0 0 0 18.75 17v-.25H20a.75.75 0 0 0 0-1.5h-1.25v-2.5H20a.75.75 0 0 0 0-1.5h-1.25v-2.5H20a.75.75 0 0 0 0-1.5h-1.25V7A1.75 1.75 0 0 0 17 5.25h-.25V4a.75.75 0 0 0-1.5 0v1.25h-2.5V4a.75.75 0 0 0-1.5 0v1.25h-2.5zm-2 3A.25.25 0 0 1 7 6.75h10a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25V8zm5.049 7.753l-.275-.772H9.497l-.275.772a.75.75 0 0 1-1.413-.504l1.7-4.77l.003-.009l.004-.01c.152-.392.516-.711.994-.711c.479 0 .842.319.995.712l.003.009l.004.01l1.7 4.77a.75.75 0 0 1-1.413.503m-1.289-3.615l.479 1.343h-.958zm3.74-1.64a.75.75 0 0 1 1.5 0v5.003a.75.75 0 1 1-1.5 0z' clip-rule='evenodd'/%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">AI and ML</p>
            </div>
          </Link>
        )}
        {pathname === "/resources/devops" ? (
          <div className={ACTIVE}>
            <img
              className="w-6"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath d='M4 6v6s0 3 7 3s7-3 7-3V6'/%3E%3Cpath d='M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m15 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4'/%3E%3Cpath stroke-dasharray='.3 2' d='M19 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <p className="ml-2">Devops</p>
          </div>
        ) : (
          <Link href="/resources/devops">
            <div className={INACTIVE}>
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath d='M4 6v6s0 3 7 3s7-3 7-3V6'/%3E%3Cpath d='M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m15 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4'/%3E%3Cpath stroke-dasharray='.3 2' d='M19 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6'/%3E%3C/g%3E%3C/svg%3E"
                alt=""
              />
              <p className="ml-2">Devops</p>
            </div>
          </Link>
        )}
      </div>
      <Link href="/resources/add">
        <div className="text-white rounded-xl h-16 p-4 flex justify-center w-[90%] mb-10 items-center bg-gradient-to-r from-slate-900 via-slate-500 to-slate-600 text-2xl font-bold hover:scale-110 transition-all duration-200">
          Add Resources
        </div>
      </Link>
    </div>
  );
}
