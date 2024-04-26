import MainpageTitle from "./mainpagetitle";
import Reveal from "../reveal";
import Penn from "@/public/Penn.png";
import MIT from "@/public/MIT.png";
import Cambridge from "@/public/Cambridge.png";
import Oxford from "@/public/Oxford.png";
import Nasa from "@/public/NASA.png";
import Image from "next/image";
import un from "@/public/un.png";
import unsightcover from "@/public/unsightcover.png";
import IntroPage from "./intro";
export default function Mainpage() {
  return (
    <div className="pt-14 text-white flex flex-col w-[100%] min-h-screen bg-black ">
      <div className="flex w-full h-[700px] items-center mb-10">
        <MainpageTitle />
        <div className="w-[50%] h-full flex items-center ">
          <Reveal>
            <Image
              className="m-auto w-[80%] hover:rotate-180 transition duration-1000"
              src={unsightcover}
              alt=""
            />
          </Reveal>
        </div>
      </div>
      <div className="w-[100%] flex justify-center mt-20 h-20">
        <div className="flex items-center mx-2 text-yellow-400">
          Featured on
        </div>
        <div className="flex items-center mx-2">
          <svg
            className="w-10 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="grey"
              d="M32 32v448h448V32Zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54l44.33-97.54h52.73Z"
            />
          </svg>
          <p className="text-slate-300 font-bold text-lg">Hacker News</p>
        </div>

        <div className="flex items-center mx-2">
          <svg
            className="w-10 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="grey"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M10 16V8h2.5a2.5 2.5 0 1 1 0 5H10" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
            </g>
          </svg>
          <p className="text-slate-300 font-bold text-lg">Product Hunt</p>
        </div>
        <div className="flex items-center mx-2">
          <svg
            className="w-10 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="grey"
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
            />
          </svg>
        </div>
        <div className="flex items-center mx-2">
          <svg
            className="w-10 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="grey"
              fill-rule="evenodd"
              d="M15 8c0 3.87-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7m-2.52-.55c.11.16.18.35.18.55c0 .19-.05.38-.15.55c-.1.16-.25.3-.42.38v.31c0 1.57-1.83 2.84-4.08 2.84s-4.08-1.27-4.08-2.84v-.31c-.13-.06-.25-.15-.35-.27a.9.9 0 0 1-.2-.39a.9.9 0 0 1-.02-.44c.02-.15.08-.28.16-.41a.9.9 0 0 1 .32-.3c.13-.08.27-.13.41-.14c.15-.02.29 0 .43.04s.27.12.38.22c.81-.55 1.76-.85 2.73-.86l.52-2.43s.02-.05.03-.08l.06-.06c.02-.02.05-.03.08-.03h.09l1.72.34a.75.75 0 0 1 .37-.31c.16-.06.33-.05.48 0s.28.17.36.32s.1.32.07.48a.696.696 0 0 1-.72.55c-.17 0-.32-.08-.45-.19a.72.72 0 0 1-.22-.43l-1.5-.31l-.46 2.18c.96.02 1.9.32 2.69.86c.11-.1.23-.18.37-.23s.29-.07.43-.05c.15.01.29.06.42.13s.24.18.32.3Zm-6.7.86a.6.6 0 0 0-.1.25q-.03.135 0 .27a.696.696 0 0 0 .83.55c.09-.02.18-.05.25-.1a.69.69 0 0 0 .29-.72a.696.696 0 0 0-.83-.55c-.18.04-.34.14-.45.3ZM8 11.16c.62.03 1.23-.14 1.73-.51c.04-.04.06-.09.06-.14s-.02-.1-.06-.14c-.02-.02-.04-.03-.06-.04a.2.2 0 0 0-.07-.02c-.05 0-.1.02-.14.06c-.42.3-.94.46-1.46.43c-.52.02-1.04-.13-1.46-.44a.2.2 0 0 0-.13-.04q-.075 0-.12.06c-.03.03-.05.08-.06.12c0 .05.01.09.04.13c.5.37 1.11.56 1.73.54Zm1.21-1.85c.12.08.24.15.38.15c.09 0 .19-.02.28-.05c.09-.04.17-.09.23-.16q.105-.105.15-.24a.7.7 0 0 0 .05-.28c0-.12-.03-.24-.09-.34a.8.8 0 0 0-.25-.26c-.1-.06-.22-.1-.34-.1s-.24.03-.35.08a.67.67 0 0 0-.26.24c-.06.1-.1.22-.11.34c0 .12.02.24.07.35s.14.2.24.27"
            />
          </svg>
          <p className="text-slate-300 font-bold text-lg">Reddit</p>
        </div>
      </div>
      <IntroPage />
    </div>
  );
}
