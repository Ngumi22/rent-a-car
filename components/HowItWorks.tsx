import { HiOutlineMapPin, HiCalendarDays } from "react-icons/hi2";
import { IoCarSport } from "react-icons/io5";

import React from "react";

const cards = [
  {
    color: "bg-orange-500",
    num: "01",
    title: "SELECT A DATE",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
  },
  {
    color: "bg-teal-500",
    num: "02",
    title: "BOOK A CAR",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
  },
  {
    color: "bg-purple-500",
    num: "03",
    title: "MAKE PAYMENTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
  },
  {
    color: "bg-purple-300",
    num: "04",
    title: "ENJOY THE CAR",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="grid place-content-center h-100">
      <div className="w-1/2 grid place-content-center m-auto">
        <h1 className="text-[40px] font-bold m-auto py-5">How It Works</h1>
        <p className="m-auto">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="flex flex-col w-full my-10 gap-4 sm:flex-row items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-span-4 bg-gray-100 mx-5 sm:col-span-2 lg:col-span-1 relative px-5 my-5 pt-10 pb-2 flex flex-col justify-start items-center border-[1px] border-gray-400 rounded-xl text-black">
            <span className="absolute -top-6 p-3 border-2 border-yellow-600 rounded-full bg-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-7 h-7 text-yellow-640">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </span>
            <h2 className="my-1 gradient-red text-base text-[24px] uppercase tracking-wide">
              {card.title}
            </h2>
            <p className="py-8 text-center text-sm">{card.description}</p>
            <span className="absolute -bottom-7 p-4 border-2 border-blue-600 text-black rounded-full bg-blue-600">
              {card.num}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
