import MainpageTitle from "./mainpagetitle";
import Reveal from "./reveal";
import Penn from "@/public/Penn.png";
import MIT from "@/public/MIT.png";
import Cambridge from "@/public/Cambridge.png";
import Oxford from "@/public/Oxford.png";
import Nasa from "@/public/NASA.png";
import Image from "next/image";

export default function Mainpage() {
  return (
    <div className="pt-14 text-white items-center flex flex-col w-full min-h-screen bg-black">
      <MainpageTitle />
      <p className="mb-10 text-xl text-slate-300">
        Explore, Connect, and Share, With Confidence
      </p>
      <div className="border justify-center border-slate-700 w-[90%] p-5 flex">
        {/* <img
          className="w-[40%] rounded-xl hover:scale-110 duration-300 transition-all"
          src="https://plus.unsplash.com/premium_photo-1661704204591-4068d506c03e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="w-[60%] mx-10">
          <h1 className="text-4xl">
            Join the community of tech students and share your{" "}
          </h1>
        </div> */}
        <div className="flex justify-center w-[80%]">
          <Image
            className="mx-4 slide-in-from-right-28"
            src={Penn}
            width={150}
            alt=""
          />
          <Image className="mx-4" src={Oxford} width={150} alt="" />
          <Image className="mx-4" src={MIT} width={150} alt="" />
          <Image className="mx-4" src={Cambridge} width={150} alt="" />
          <Image className="mx-4" src={Nasa} width={150} alt="" />
        </div>
      </div>
    </div>
  );
}
