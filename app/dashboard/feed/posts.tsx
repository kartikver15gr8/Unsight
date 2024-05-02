"use client";

import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export function Posts({
  id,
  description,
  imgUrl,
  likes,
  userId,
}: {
  id: number;
  description: string;
  imgUrl: string | null;
  likes: number | null;
  userId: string;
}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/user/likepost"
          : "https://unsight.vercel.app/api/user/likepost";
      const res = await axios.post(apiUrl, {
        postId: id,
      });

      window.location.reload();
      return res.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <Card className="p-4 my-2 border-slate-600  text-white bg-black">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full mr-2 border-slate-500 border"
          src={
            imgUrl
              ? imgUrl
              : "https://pbs.twimg.com/profile_images/1768351375384072192/Ys0D3t8N_400x400.jpg"
          }
          alt=""
        />
        <div>
          <p className="text-lg font-bold">{userId}</p>
          <p>ex-SpaceX</p>
        </div>
      </div>

      <p className="ml-2 mt-5 font-bold">{description}</p>
      <div className="flex mt-4 mb-2">
        <div
          onClick={handleLike}
          className="w-14 h-8  justify-center flex items-center p-1 bg-slate-800 rounded-full hover:bg-blue-900"
        >
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <g fill="#ca58ca">
              <path
                d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54"
                opacity="0.2"
              />
              <path d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8" />
            </g>
          </svg>
          <p className="ml-1">{likes ? likes : 0}</p>
        </div>

        <div className="w-14 h-8 ml-2 justify-center flex items-center p-1 bg-slate-800 rounded-full hover:bg-blue-900">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="white"
                d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22z"
              />
            </g>
          </svg>
          <p className="ml-1">{likes ? likes : 0}</p>
        </div>

        <div className="w-14 h-8 ml-2 justify-center flex items-center p-1 bg-slate-800 rounded-full hover:bg-blue-900">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="white"
                d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
                opacity="0.16"
              />
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
              />
            </g>
          </svg>
          <p className="ml-1">{likes ? likes : 1}</p>
        </div>
      </div>
    </Card>
  );
}
