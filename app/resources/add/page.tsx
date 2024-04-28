"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categary, setCategary] = useState("");
  const [resourceLink, setResourceLink] = useState("");

  const session = useSession();
  const router = useRouter();

  const handleOnClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/addresourse",
        {
          title: title,
          description: description,
          categary: categary,
          resourceLink: resourceLink,
        }
      );

      router.push("/resources/all");
      return res.data;
    } catch (error) {
      return `Error: ${error}`;
    }
  };

  return (
    <div className="flex text-black flex-col items-center p-5 h-100vh ">
      <div className="w-[80%] bg-black shadow-lg shadow-slate-500 h-[600px] border rounded-xl flex flex-col items-center">
        <p className="text-3xl font-bold flex-col p-2 mt-5 mb-5 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 text-transparent inline-block bg-clip-text">
          Add Resources
        </p>
        <input
          className="text-black border rounded-xl w-[80%] p-4 mb-2 shadow-md"
          type="text"
          placeholder="Title for the resource..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <select
          value={categary}
          onChange={(e) => {
            setCategary(e.target.value);
            console.log(categary.toString());
          }}
          className="text-black border rounded-xl w-[80%] p-4 mb-2 shadow-md"
        >
          <option value="">Select a categary</option>
          <option value="webdev">Web Development</option>
          <option value="aiml">AI and ML</option>
          <option value="blockchain">Blockchain & Web3</option>
          <option value="devops">DevOps</option>
        </select>

        <input
          className="text-black border w-[80%] rounded-xl p-4 mb-2 shadow-md"
          name="note"
          placeholder="Put resource link..."
          onChange={(e) => {
            setResourceLink(e.target.value);
          }}
        />
        <textarea
          className="text-black border w-[80%] rounded-xl p-4 mb-2 shadow-md"
          name="note"
          placeholder="Description..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id=""
          cols={30}
          rows={6}
        ></textarea>
        <Button onClick={handleOnClick} className="bg-blue-300 w-44">
          Add
        </Button>
      </div>
    </div>
  );
}
