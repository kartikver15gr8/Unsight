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
            hello
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
