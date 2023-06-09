import { Button } from "../Button";

const car = {
  title: "Carro Insano",
  quilômetros: "0",
  year: "2013",
  price: "5.000.000",
};

export const TitleProduct = () => {
  return (
    <div className="p-6 flex flex-col gap-6 rounded-2 md:relative">
      <h2 className="text-heading-6 font-600 text-grey-1">{car.title}</h2>
      <div className="flex gap-2">
        <span className="text-brand-1 bg-brand-4 text-body-2 py-1 px-2 rounded-1 ">
          {car.year}
        </span>
        <span className="text-brand-1 bg-brand-4 text-body-2 py-1 px-2 rounded-1">
          {car.quilômetros} km
        </span>
      </div>
      <p className="text-heading-7 font-500 text-grey-1 md:absolute right-6 bottom-20">
        R$ {car.price}
      </p>
      <Button variant="brand1" size="medium" text="Comprar" />
    </div>
  );
};
