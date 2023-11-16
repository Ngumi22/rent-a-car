import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { MdOutlineStar } from "react-icons/md";

interface Testimony {
  country: string;
  href: string;
  imgSrc: string;
  name: string;
}

const testimonials: Testimony[] = [
  {
    country: "USA",
    name: "John Smith",
    href: "/rent-your-car",
    imgSrc: "/car8.jpeg",
  },
  {
    country: "UK",
    name: "David Smith",
    href: "/why-choose-us",
    imgSrc: "/car9.jpeg",
  },
  {
    country: "AUSTRALIA",
    name: "Jeremiah Smith",
    href: "/why-choose-us",
    imgSrc: "/car1.jpeg",
  },
  {
    country: "NORWAY",
    name: "John kamau",
    href: "/why-choose-us",
    imgSrc: "/car2.jpeg",
  },
  {
    country: "GERMANY",
    name: "Peter Kamau",
    href: "/why-choose-us",
    imgSrc: "/car3.jpeg",
  },
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section id="testimonials" className="container m-10 p-10">
      <div className="grid grid-rows-2 place-content-center">
        <button className="px-4 w-1/2 m-auto my-5 text-black font-semibold py-2 bg-blue-200">
          Testimonials
        </button>
        <h1 className="font-semibold text-[30px]">
          What Our Clients Say about Us
        </h1>
      </div>
      <motion.div className="overflow-hidden px-10 py-10">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={carousel}
          className="flex gap-8 snap-x">
          {testimonials.map((testimony, index) => (
            <AnimatePresence key={index}>
              <motion.div>
                <div
                  key={index}
                  className="flex justify-center rounded-lg shadow-2xl"
                  style={{
                    minHeight: "8rem",
                    minWidth: "30rem",
                  }}>
                  <div className="w-1/2 aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                    <Image
                      height={200}
                      width={200}
                      src={testimony.imgSrc}
                      alt={testimony.name}
                      className="h-full w-full object-cover my-auto object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="w-1/2 p-4">
                    <p className="font-semibold my-4">
                      <span className="text-[22px]">5.0</span> stars
                    </p>
                    <div className="flex gap-1 my-4">
                      <MdOutlineStar className="my-auto" />
                      <MdOutlineStar className="my-auto" />
                      <MdOutlineStar className="my-auto" />
                      <MdOutlineStar className="my-auto" />
                      <MdOutlineStar className="my-auto" />
                    </div>
                    <p className="text-orange-400 overflow-hidden">
                      "Lorem ipsum dolor sit amet consectetur adipisicing eli"
                    </p>
                    <p className="text-black font-semibold mt-4">
                      {testimony.name}
                    </p>
                    <p className="text-black font-semibold mt-1">
                      From {testimony.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
