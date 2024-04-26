"use client";

import { Input } from "./ui/input";
import { Card } from "./ui/card";
import PostCard from "./postCard";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Landing() {
  const router = useRouter();
  const [description, setPost] = useState("");

  const handleOnclick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/createpost",
        { description }
      );
      console.log("el");

      router.push("/");
      return response.data;
    } catch (error) {
      return `Error: ${error}`;
    }
  };

  return (
    <div className="w-[50%] p-2 px-4 text-slate-200 flex flex-col max-h-full">
      <div>
        <h1 className="font-bold my-2 ">
          Unsight - Anonymous and Professional Community of Students
        </h1>
        <div className="relative w-[100%] items-center text-slate-900 flex">
          <Input
            onChange={(e) => {
              setPost(e.target.value);
            }}
            className="h-16 text-xl bg-slate-300 rounded-xl w-[100%]"
            placeholder="Start a post..."
          />
          <button
            onClick={handleOnclick}
            className="w-10 rounded-md justify-center h-10 items-center flex absolute right-0 mr-3 bg-black hover:bg-slate-600 transition-all duration-200"
          >
            <svg
              className="w-5 hover:rotate-45 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <defs>
                <path
                  id="letsIconsSendDuotone0"
                  fill="white"
                  d="m7.692 11.897l1.41.47c.932.31 1.397.466 1.731.8c.334.334.49.8.8 1.73l.47 1.41c.784 2.354 1.176 3.53 1.897 3.53c.72 0 1.113-1.176 1.897-3.53l2.838-8.512c.552-1.656.828-2.484.391-2.921c-.437-.437-1.265-.161-2.92.39l-8.515 2.84C5.34 8.887 4.162 9.279 4.162 10c0 .72 1.177 1.113 3.53 1.897"
                />
              </defs>
              <use href="#letsIconsSendDuotone0" fillOpacity="0.25" />
              <use href="#letsIconsSendDuotone0" fillOpacity="0.25" />
              <path
                fill="white"
                d="m9.526 13.842l-2.062-.687a1 1 0 0 0-.87.116l-1.09.726a.8.8 0 0 0 .25 1.442l1.955.488a.5.5 0 0 1 .364.364l.488 1.955a.8.8 0 0 0 1.442.25l.726-1.09a1 1 0 0 0 .116-.87l-.687-2.062a1 1 0 0 0-.632-.632"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
