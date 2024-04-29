"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const card = cardRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--x", `${x}px`);
          card.style.setProperty("--y", `${y}px`);
        }
      };

      card?.addEventListener("mousemove", handleMouseMove);

      return () => {
        card?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      className="w-[90%] flex flex-col mt-2 backdrop-blur-lg bg-slate-600 bg-opacity-40 rounded-xl h-64 p-4 card relative hover:scale-95 transition-all duration-300"
      ref={cardRef}
    >
      <div className="w-full mb-5">
        <p className="text-2xl mb-2">{title}</p>
        <p className="text-md">{description}</p>
      </div>
      <div className="border rounded-xl text-lg w-fit px-2 mt-5 ">
        {categary}
      </div>
      <div className="flex mt-4">
        <Button className="w-[20%] bg-[#023262] border-blue-200 border-2 rounded-full mr-2 h-12 text-lg">
          {1}
        </Button>
        <Button className="w-[80%] bg-[#023262] border-blue-200 border-2 rounded-full ml-2 h-12">
          <a
            className="text-lg w-full h-full flex items-center justify-center"
            href={resourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out
          </a>
        </Button>
      </div>

      <style jsx>{`
        .card {
          position: relative;
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at var(--x, 50%) var(--y, 50%),
            rgba(29, 144, 237, 0.3),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
          pointer-events: none;
          z-index: 1;
        }

        .card:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
