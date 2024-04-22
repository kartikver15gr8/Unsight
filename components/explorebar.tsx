import { Card } from "./ui/card";

export default function Explorebar() {
  return (
    <div className="w-[25%] flex flex-col pt-2">
      <Card className="m-2 pl-4 text-lg rounded-xl h-16 shadow-md flex items-center">
        sponsored
      </Card>
      <Card className="m-2 p-2 pl-4 text-lg rounded-xl shadow-md flex flex-col">
        <p className="font-bold mb-2">Popular posts</p>
        <div className="border-b pb-2 my-2">
          <div className="flex flex-col">
            <div className="flex text-sm mb-1 justify-between">
              <p className="text-slate-500">Design Career</p>
              <img src="" alt="" />
              <p className="mr-2">145</p>
            </div>
            <p className="font-bold text-sm">
              UX Design and Product Design Job Market
            </p>
          </div>
        </div>
        <div className="border-b pb-2 my-2">
          <div className="flex flex-col">
            <div className="flex text-sm mb-1 justify-between">
              <p className="text-slate-500">Web3 Career</p>
              <img src="" alt="" />
              <p className="mr-2">8k</p>
            </div>
            <p className="font-bold text-sm">Solana or Ethereum Ecosystem</p>
          </div>
        </div>
        <div className=" pb-2 my-2">
          <div className="flex flex-col">
            <div className="flex text-sm mb-1 justify-between">
              <p className="text-slate-500">Personal Finance</p>
              <img src="" alt="" />
              <p className="mr-2">1145</p>
            </div>
            <p className="font-bold text-sm">How to do car insurance</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
