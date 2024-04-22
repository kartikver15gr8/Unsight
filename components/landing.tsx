import { Input } from "./ui/input";
import { Card } from "./ui/card";
import PostCard from "./postCard";
export default function Landing() {
  return (
    <div className="bg-slate-200 w-[50%] p-2 px-4 flex flex-col max-h-full">
      <div>
        <h1 className="font-bold my-2">
          Unsight - Anonymous and Professional Community of Students
        </h1>
        <Input className="h-16 rounded-xl" placeholder="Start a post..." />
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
