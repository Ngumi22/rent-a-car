import Image from "next/image";
import Link from "next/link";
export default function DownloadApp() {
  return (
    <section
      id="download"
      className="md:flex sm:block justify-center m-10 p-10 bg-blue-300">
      <div className="flex-1 grid place-content-center gap-5">
        <button className="px-5 py-2 bg-blue-500 w-1/2">
          DownLoad Our App
        </button>
        <div className="text-[30px] font-semibold m-auto">
          Download Rent-A-Car App for free on Google Play Or Appstore
        </div>
        <div>For Faster, Easier booking and Exclusive Deals</div>
        <div className="flex justify-start gap-10">
          <Link href="/#">
            <Image
              src="/appstore.png"
              alt="appstore"
              height={100}
              width={100}
              className="my-auto h-auto w-full"
            />
          </Link>
          <Link href="/#">
            <Image
              src="/googleplay.png"
              alt="google"
              height={100}
              width={100}
              className="my-auto h-auto w-full"
            />
          </Link>
        </div>
      </div>
      <div className="flex-1 px-20">
        <Image
          src="/bg.png"
          alt="car"
          height={500}
          width={500}
          className="my-auto h-auto w-full"
        />
      </div>
    </section>
  );
}
