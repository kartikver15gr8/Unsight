import { Button } from "../ui/button";
import Reveal from "../reveal";

export default function MainpageTitle() {
  return (
    <div className="flex my-10 justify-center ml-20 lg:mt-14 md:mt-14 sm:mt-10 xl:mt-20 2xl:mt-20 font-bold flex-col w-[50%] text-black  ">
      <Reveal>
        <p className="2xl:text-8xl xl:text-7xl lg:text-7xl md:text-5xl sm-4xl text-4xl bg-gradient-to-r from-slate-800 via-slate-500 to-slate-300 text-transparent inline-block bg-clip-text font-bold">
          Building Trust!
        </p>
      </Reveal>
      <Reveal>
        <p className="2xl:text-7xl xl:text-7xl lg:text-8xl md:text-6xl sm-4xl text-4xl bg-gradient-to-r from-[#023262] via-[#1F72AF] to-blue-400 text-transparent inline-block bg-clip-text font-bold">
          with Anonymity
        </p>
      </Reveal>
      <Reveal>
        <p className="mt-2 text-md text-slate-300">
          Welcome to Unsight, a platform where you can...
        </p>
      </Reveal>
      <Reveal>
        <p className="mb-10 text-md text-slate-300">
          Explore, Connect, and Share With Confidence
        </p>
      </Reveal>

      <Reveal>
        <Button className="font-bold rounded-xl flex justify-center text-white text-xl w-40 h-12 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 hover:h-14 transition-all duration-300">
          Join Today
        </Button>
      </Reveal>
    </div>
  );
}
