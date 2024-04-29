import { Button } from "./ui/button";

export default function UnderDevelopment() {
  return (
    <div className="pt-20 text-white w-full  flex flex-col h-[90vh] justify-center items-center">
      <div className="w-[50%] justify-center flex-col flex items-center">
        <div className="text-4xl font-bold">
          This page is under development!
        </div>
        <div className="text-xl text-slate-500">
          Soon You'll see content over here, Till then please explore our other
          pages
        </div>
        <Button className="bg-blue-900 text-lg font-bold hover:scale-110 hover:bg-blue-800 transition-all duration-300 mt-14">
          Go to Home!
        </Button>
      </div>
    </div>
  );
}
