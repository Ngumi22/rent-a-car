"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Service {
  name: string;
  href: string;
  imgSrc: string;
  colspan?: number;
  rowspan?: number;
}

const services: Service[] = [
  {
    name: "One Day Drive",
    href: "/rent-your-car",
    imgSrc: "/i8.jpg",
  },
  {
    name: "Weddings Package",
    href: "/why-choose-us",
    imgSrc: "/i8.jpg",
  },
  {
    name: "Cargo Transport",
    href: "/why-choose-us",
    imgSrc: "/i8.jpg",
  },
  {
    name: "Long Term",
    href: "/why-choose-us",
    imgSrc: "/car4.jpeg",
  },
  {
    name: "Corporate",
    href: "/why-choose-us",
    imgSrc: "/i8.jpg",
  },

  {
    name: "Corpohdhfndsdte",
    href: "/why-choose-us",
    imgSrc: "/i8.jpg",
  },
];

const Carousel: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section className="m-10 p-10">
      <div className="grid grid-rows-2 gap-1 place-content-center">
        <h1 className="font-semibold mx-auto text-[20px]">See Our</h1>
        <p className="m-auto font-semibold text-[40px]">Latest Services</p>
      </div>
      <motion.div className="relative overflow-hidden">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={carousel}
          className="flex gap-8">
          {services.map((service, index) => (
            <AnimatePresence key={index}>
              <motion.div>
                <div
                  key={index}
                  className="flex justify-center object-cover bg-cover rounded-lg bg-blue-200"
                  style={{
                    backgroundImage: `url(${service.imgSrc})`,
                    minHeight: "18rem",
                    minWidth: "20rem",
                  }}>
                  <a href={service.href} className="m-auto text-red">
                    {service.name}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Carousel;
