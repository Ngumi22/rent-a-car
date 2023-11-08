export default function SearchInput() {
  return (
    <div className="flex px-5 mt-5">
      <div className="basis-1/4 bg-red-400 flex flex-wrap text-[35px] px-5">
        <p className="m-auto">Search Your Best Cars Here.</p>
      </div>

      <div className="basis-3/4 grid grid-cols-3 gap-4 place-items-stretch py-14 px-5 bg-white border border-black">
        <div className="">
          <input
            type="text"
            placeholder="Pick Up Date"
            className="outline-none w-full bg-transparent text-gray-400"
          />
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Pick Up Date"
            className="outline-none w-full bg-transparent text-gray-400"
          />
        </div>

        <label className="block ">
          <select className="block w-full">
            <option>Car Type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>

        <div className="">
          <input
            type="date"
            placeholder="Pick Up Date"
            className="outline-none w-full bg-transparent text-gray-400"
          />
        </div>
        <div className="">
          <input
            type="date"
            placeholder="Pick Up Date"
            className="outline-none w-full bg-transparent text-gray-400"
          />
        </div>

        <div className="">
          <button className="border-[1px] px-6 py-2 w-full place-self-center bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
