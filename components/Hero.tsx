import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="hero"
      className="md:flex text-black m-10 p-10 bg-white sm:block md:container md:mx-auto">
      <div className="flex-1 px-16 py-1">
        <div className="py-0">
          <p className="text-[70px] p-0">Drive Your</p>
          <div className="flex flex-wrap items-center justify-center">
            <p className="text-[70px] ">Dream</p>
            <div className="m-auto text-gray-600">
              <p className="text-[20px] px-2">Unlock your Journey</p>
              <p className="text-[20px] px-2 hover:underline hover:underline-offset-2">
                With Our Rental Cars
              </p>
            </div>
          </div>
        </div>

        <article className="m-auto break-normal py-1">
          Get a car wherever and whenever you need it at the comfort of your
          phone
        </article>

        <div className="flex justify-start py-3 gap-10">
          <Link href="/appstore.com">
            <button className="flex gap-2 px-12 py-3 text-sm font-medium text-white bg-btn-color border border-btn-color rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
              Find A Car <FaArrowRightLong className="m-auto" />
            </button>
          </Link>
          <Link href="/playstore">
            <button className="flex gap-2 px-12 py-3 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
              Learn More
              <FaArrowRightLong className="m-auto" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 hidden md:block">
        <img src="/ferr.jpg" className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}
