"use client";

import { Button } from "@/components/ui/button";

export default function ResourceCard({
  id,
  userId,
  categary,
  title,
  description,
  resourceLink,
}: {
  id: number;
  userId: string;
  categary: string;
  title: string;
  description: string;
  resourceLink: string;
}) {
  return (
    <div className="w-[90%] flex flex-col mt-2 bg-slate-700 rounded-xl h-64 p-4">
      <div className="w-full mb-5">
        <p className="text-2xl mb-2">{title}</p>
        <p className="text-md">{description}</p>
      </div>
      <div className="border rounded-xl text-lg w-fit px-2 mt-5 ">
        {categary}
      </div>
      <div className="flex mt-4">
        <Button className="w-[20%] rounded-xl mr-2 h-14 text-lg">{1}</Button>

        <Button className="w-[80%] rounded-xl ml-2 h-14">
          <a
            className="text-lg w-full h-full flex items-center justify-center"
            href={resourceLink}
            target="_blank"
          >
            Check out
          </a>
        </Button>
      </div>
    </div>
  );
}
