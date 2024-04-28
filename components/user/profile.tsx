import Reveal from "../reveal";

export default function ProfilePage({
  profileImg,
  name,
  bannerImg,
  id,
}: {
  profileImg: string;
  name: string;
  bannerImg: string;
  id: string;
}) {
  return (
    <div className="w-[100%] h-[450px] rounded-xl mt-5 text-slate-200 flex flex-col border border-slate-500">
      <div className="w-[100%] relative rounded-xl">
        <div className="w-[100%] rounded-t-xl h-48">
          <img
            className="w-full h-full bg-cover bg-center rounded-t-xl"
            src="https://static.teamblind.com/img/channel/background/us/4f7ec041778501.png"
            alt=""
          />
        </div>
        <div className="w-96 h-80 absolute top-28 ml-6 ">
          <Reveal>
            <div className="w-44 h-44 bg-slate-100 rounded-full border-2">
              <img
                className="rounded-full"
                src="https://pbs.twimg.com/profile_images/1768351375384072192/Ys0D3t8N_400x400.jpg"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-5 text-2xl font-bold">Kartikey Verma</div>
          </Reveal>
          <Reveal>
            <div className="flex items-center mt-1">
              <svg
                className="w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path
                  fill="grey"
                  d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.61 87.61 0 0 1-3.33 24h-38.51a157.44 157.44 0 0 0 0-48h38.51a87.61 87.61 0 0 1 3.33 24m-114 40h52a115.11 115.11 0 0 1-26 45a115.27 115.27 0 0 1-26-45m-3.9-16a140.84 140.84 0 0 1 0-48h59.88a140.84 140.84 0 0 1 0 48ZM40 128a87.61 87.61 0 0 1 3.33-24h38.51a157.44 157.44 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114-40h-52a115.11 115.11 0 0 1 26-45a115.27 115.27 0 0 1 26 45m52.33 0h-35.62a135.28 135.28 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.28 135.28 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.28 135.28 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.28 135.28 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
                />
              </svg>
              <p className="text-slate-500">Public</p>
            </div>
          </Reveal>
        </div>
        <div className="h-56 w-56 absolute top-48 right-3 ml-8 justify-end flex ">
          <Reveal>
            <div className="flex justify-center items-center mt-5 text-lg rounded-full mx-5 w-20 h-10 bg-blue-600 font-bold hover:bg-blue-800 transition-all duration-300">
              Follow
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
