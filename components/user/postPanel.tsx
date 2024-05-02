"use client";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useState } from "react";
import axios from "axios";
import { throttle } from "./throttle";

import z from "zod";

export default function PostPanel() {
  const router = useRouter();
  const [description, setPost] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleOnclick = async () => {
    try {
      setIsAdding(true);
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/user/createpost"
          : "https://unsight.vercel.app/api/user/createpost";
      const response = await axios.post(apiUrl, { description });
      console.log("el");
      setPost("");
      window.location.reload();
      return response.data;
    } finally {
      setIsAdding(false);
    }
  };

  const throttledAdd = throttle(handleOnclick, 2000);

  return (
    <div className="w-[100%] p-2 text-slate-200 flex flex-col max-h-full">
      {/* <h1 className="font-bold my-2 ">
        Unsight - Anonymous and Professional Community of Students
      </h1> */}
      <div className="relative w-[100%] items-center text-slate-200 flex">
        <Input
          onChange={(e) => {
            setPost(e.target.value);
          }}
          className="h-16 text-xl bg-black  rounded-xl w-[100%]"
          placeholder="Start a post..."
        />
        <button
          onClick={throttledAdd}
          disabled={isAdding}
          className="w-10 rounded-md justify-center h-10 items-center flex absolute right-0 mr-3 bg-white hover:bg-blue-600 transition-all duration-200"
        >
          {isAdding ? (
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="#2a60df"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"
              />
            </svg>
          ) : (
            <svg
              className="w-8 hover:rotate-45 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <defs>
                <path
                  id="letsIconsSendDuotone0"
                  fill="black"
                  d="m7.692 11.897l1.41.47c.932.31 1.397.466 1.731.8c.334.334.49.8.8 1.73l.47 1.41c.784 2.354 1.176 3.53 1.897 3.53c.72 0 1.113-1.176 1.897-3.53l2.838-8.512c.552-1.656.828-2.484.391-2.921c-.437-.437-1.265-.161-2.92.39l-8.515 2.84C5.34 8.887 4.162 9.279 4.162 10c0 .72 1.177 1.113 3.53 1.897"
                />
              </defs>
              <use href="#letsIconsSendDuotone0" fillOpacity="0.35" />
              <use href="#letsIconsSendDuotone0" fillOpacity="0.25" />
              <path
                fill="black"
                d="m9.526 13.842l-2.062-.687a1 1 0 0 0-.87.116l-1.09.726a.8.8 0 0 0 .25 1.442l1.955.488a.5.5 0 0 1 .364.364l.488 1.955a.8.8 0 0 0 1.442.25l.726-1.09a1 1 0 0 0 .116-.87l-.687-2.062a1 1 0 0 0-.632-.632"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
