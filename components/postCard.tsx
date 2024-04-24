import { Card } from "./ui/card";

export default function PostCard() {
  return (
    <Card className="p-4 my-4 bg-slate-400">
      <div className="flex">
        <img
          className="w-12 rounded-full mr-2"
          src="https://static.teamblind.com/img/companyPage/logo_2cf6d227129317.jpg"
          alt=""
        />
        <div>
          <p>Politics</p>
          <p>ex-SpaceX</p>
        </div>
      </div>
      <h1 className="my-4 text-lg font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quas!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        eos iusto natus ipsum. Cum quasi iure reprehenderit minus quis?
      </p>
      <div className="flex mt-4 mb-2">
        <div className="w-14 h-8 justify-center flex items-center mx-1 bg-slate-300 rounded-full">
          h
        </div>
        <div className="w-14 h-8 justify-center flex items-center mx-1 bg-slate-300 rounded-full">
          h
        </div>
        <div className="w-14 h-8 justify-center flex items-center mx-1 bg-slate-300 rounded-full">
          h
        </div>
      </div>
    </Card>
  );
}
