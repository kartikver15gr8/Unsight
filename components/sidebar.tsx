const ACTIVE = "";
const INACTIVE = "";

export default function Sidebar() {
  return (
    <div className="w-[25%] flex flex-col bg-[#F9F9FB]">
      <div className=" p-4 border-b border-slate-200 ">
        <div className="h-12 font-bold my-1 bg-slate-200 rounded-lg p-2 flex items-center">
          <img
            className="w-6"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z'/%3E%3C/svg%3E"
            alt=""
          />
          <p className="ml-2">Feed</p>
        </div>
        <div className="h-12 font-bold my-1 bg-slate-200 rounded-lg p-2 flex items-center">
          <img
            className="w-6"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z'/%3E%3C/svg%3E"
            alt=""
          />
          <p className="ml-2">Polls</p>
        </div>
      </div>
      <div className="p-6">
        <p className="font-bold h-12">INDUSTRIES</p>
        <ul>
          <li className="h-12 text-slate-500 px-2">Tech</li>
          <li className="h-12 text-slate-500 px-2">Healthcare</li>
          <li className="h-12 text-slate-500 px-2">Financial Services</li>
        </ul>
        <div className="h-12 text-slate-700 flex justify-between items-center border rounded-xl p-4">
          <p>Show more</p>
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="black"
                d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
