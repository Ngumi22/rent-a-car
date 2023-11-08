import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">
          WHY CHOOSE RENT-A-CAR
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="basis-1/3 mr-0 md:mr-8 mb-6 md:mb-0">
          <Image
            height={400}
            width={400}
            className="md:w-full mx-auto h-full"
            src="/i8.jpg"
            alt="car"
          />
        </div>

        <div className="basis-2/3 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">24/7 SUPPORT:</h3>
              <p className="text-sm">
                Our platform leverages user data and behavior to provide a
                highly personalized experience, with dynamic content and product
                recommendations that change in real-time.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">
                AFFORDABLE PRICE:
              </h3>
              <p className="text-sm">
                Our website is designed with a mobile-first approach, offering a
                seamless browsing experience across all devices, including
                smartphones and tablets.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">
                EASY TO CANCEL:
              </h3>
              <p className="text-sm">
                ur U.S.-based customer support team is available around the
                clock to answer any questions, resolve any issues, and provide
                helpful solutions. Whether it's through email, phone, or live
                chat, we're always here to support you.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">
                RESERVE ANYTIME:
              </h3>
              <p className="text-sm">
                We use cutting-edge security measures to protect our customers'
                sensitive information and ensure the safety of all transactions
                made on our site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
