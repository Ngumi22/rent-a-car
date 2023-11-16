import CarCard from "./CarCard";

const CarsList = (props: any) => {
  return (
    <div className="m-10 p-10">
      <div className="flex flex-col justify-center">
        <div className="mx-auto py-5">
          <h1 className="text-[20px] border-[1px] border-green-300 rounded py-2 px-8 bg-green-300 text-white">
            Featured Cars
          </h1>
        </div>
        <div className="mx-auto pb-10">
          <p className="text-[18px] font-semibold">
            Some of the Most Popular Rentals
          </p>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {props.carsList.map((car: any, index: number) => (
          <div key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
