import Image from "next/image";
import { FaGasPump } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = (props: any) => {
  return (
    <div className="group bg-gray-50 p-2 sm:p-2 m-1 sm:m-1 hover:bg-white hover:border-[1px] cursor-pointer duration-50 border-blue-500">
      <div className="flex justify-center">
        <Image
          src={props.car?.image?.url}
          alt={props.car.name}
          width={200}
          height={300}
          className="w-[250px] h-[180px] object-contain"
        />
      </div>
      <h2 className="text-[20px] font-medium mb-2">{props.car.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[10px] font-light">$ </span>
        {props.car.price}
        <span className="text-[12px] font-light">/day</span>
      </h2>

      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {props.car?.carType}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <MdOutlineAirlineSeatReclineExtra className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">5 Seater</h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {props.car.carAvg} KPH
          </h2>
        </div>
      </div>
      <button className="hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-700  p-2 text-white w-full px-5 justify-between">
        Rent Now
        <span className="bg-blue-400 p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CarCard;
