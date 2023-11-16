import Image from "next/image";

export default function Drivers() {
  return (
    <section className="flex justify-center bg-no-repeat bg-cover bg-center bg-regal-blue bg-scroll m-10 p-10">
      <div className="felx-1 p-10">
        <Image
          src="/bg.png"
          height={400}
          width={500}
          alt="car"
          className="mix-blend-mode-multiply"
        />
      </div>
      <div className="flex-1 p-10 my-auto">
        <div className="grid grid-rows-2 place-content-center">
          <p>Do you want to come and earn with us?</p>
          <button className="px-6 py-2 bg-gray-400 hover:bg-white ">
            Become A Driver
          </button>
        </div>
      </div>
    </section>
  );
}
