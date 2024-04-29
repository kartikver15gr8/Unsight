import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import PostCard from "@/components/postCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import z from "zod";
import { Posts } from "./posts";
import { GetFeed } from "./getfeed";
import PostPanel from "@/components/user/postPanel";
import Reveal from "@/components/reveal";

export default async function Feed() {
  const feed = await GetFeed();
  return (
    <div className="w-[50%] p-2 px-4 text-slate-200 flex flex-col max-h-full">
      <PostPanel />
      <div className="overflow-auto overflow-y-scroll h-[80vh] scrollbar-hide">
        {feed.map((e, key) => {
          return (
            <Reveal key={key}>
              <div className="">
                <Posts
                  key={key}
                  id={e.id}
                  description={e.description}
                  imgUrl={e.imgUrl}
                  likes={e.like}
                  userId={e.userId}
                ></Posts>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
