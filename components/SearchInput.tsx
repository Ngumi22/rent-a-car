export default function SearchInput() {
  return (
    <div className="bg-hero-pattern bg-cover bg-scroll bg-opacity-75 bg-center h-auto m-10 p-10">
      <div className="grid place-content-center px-32">
        <div className="pb-5">
          <h1 className="font-semibold text-white text-[40px]">
            Book & Rent a Car
          </h1>
          <p className="text-white font-semibold md:w-1/2 sm:w-full">
            Fermentum luctus convallis non lectus. Aliquam at ut viverra non
            arcu massa laoreet commodo ac. Ut dui vel eu lacus. Turpis lectus
            leo sed mi. Morbi consequat urna morbi viverra magna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-stretch sm:w-full py-16 px-16 bg-inherit border border-black">
          <div className="">
            <p className="text-white font-semibold">
              Your Name <span className="text-orange-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none w-full px-10 bg-transparent bg-white text-gray-400"
            />
          </div>

          <div className="">
            <p className="text-white font-semibold">
              Your Email <span className="text-orange-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none w-full bg-transparent px-10 bg-white text-gray-400"
            />
          </div>

          <div className="">
            <p className="text-white font-semibold">
              Phone Number <span className="text-orange-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Pick Up Date"
              className="outline-none w-full bg-transparent px-10 bg-white text-gray-400"
            />
          </div>

          <label className="block">
            <p className="text-white font-semibold">
              Car Brand <span className="text-orange-700">*</span>
            </p>
            <select className="block w-full px-10">
              <option>Car Type</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>

          <div className="">
            <p className="text-white font-semibold">
              Pick Up Date <span className="text-orange-700">*</span>
            </p>
            <input
              type="date"
              placeholder="Pick Up Date"
              className="outline-none w-full bg-transparent px-10 bg-white text-gray-400"
            />
          </div>
          <div className="">
            <p className="text-white font-semibold">
              Drop Off Date <span className="text-orange-700">*</span>
            </p>
            <input
              type="date"
              placeholder="Pick Up Date"
              className="outline-none w-full bg-transparent px-10 bg-white text-gray-400"
            />
          </div>

          <div className="">
            <button className="border-[1px] px-6 py-2 w-full place-self-center bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
