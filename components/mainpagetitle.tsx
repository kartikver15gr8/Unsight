import Reveal from "./reveal";

export default function MainpageTitle() {
  return (
    <div className="flex mt-10 lg:mt-14 md:mt-14 sm:mt-10 xl:mt-20 2xl:mt-20 font-bold flex-col w-[80%] items-center text-black p-4 ">
      <Reveal>
        <p className="text-white 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-6xl sm-4xl text-4xl">
          Unsight
        </p>
      </Reveal>
      <Reveal>
        <p className="2xl:text-9xl xl:text-8xl lg:text-8xl md:text-6xl sm-4xl text-4xl bg-gradient-to-r from-slate-800 via-slate-500 to-slate-300 text-transparent inline-block bg-clip-text font-bold">
          Building Trust!
        </p>
      </Reveal>
      <Reveal>
        <p className="2xl:text-7xl xl:text-7xl lg:text-8xl md:text-6xl sm-4xl text-4xl bg-gradient-to-r from-[#023262] via-[#1F72AF] to-blue-400 text-transparent inline-block bg-clip-text font-bold">
          with Anonymity
        </p>
      </Reveal>
    </div>
  );
}
