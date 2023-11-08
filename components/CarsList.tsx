import CarCard from "./CarCard";

const CarsList = (props: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {props.carsList.map((car: any, index: number) => (
        <div key={index}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarsList;
