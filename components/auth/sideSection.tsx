import Link from "next/link";

export default function SideSection() {
  return (
    <div className="w-[50%] bg-black min-h-screen p-8">
      <Link href="/">
        <div className="flex items-center ">
          <img
            className="w-16 mr-2 hover:rotate-180 transition-all duration-300"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 72 72'%3E%3Ccircle cx='36' cy='36' r='28' fill='%23023262'/%3E%3Ccircle r='18' fill='%231F72AF' transform='matrix(-1 0 0 1 36 36)'/%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' d='M54.125 36c0-2.118-.363-4.152-1.031-6.042c-2.489-7.04-9.202-12.083-17.094-12.083'/%3E%3Ccircle cx='36' cy='36' r='10' fill='%2399FCFF'/%3E%3Ccircle cx='36' cy='36' r='5' fill='%231F305E'/%3E%3Ccircle cx='36' cy='36' r='28' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E"
            alt=""
          />
          <p className="font-bold text-6xl bg-gradient-to-r from-[#023262] via-[#1F72AF] to-blue-500 text-transparent inline-block bg-clip-text">
            Unsight
          </p>
        </div>
      </Link>
      <div className="w-[80%] mt-48 mx-4">
        <h1 className="text-7xl mb-10 text-blue-700">Welcome to Unsight</h1>
        <p className="text-slate-500">
          A platform where you can freely share your thoughts all across the
          world, without revealing your identity
        </p>
      </div>
    </div>
  );
}
