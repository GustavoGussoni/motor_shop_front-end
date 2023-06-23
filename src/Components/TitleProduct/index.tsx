import { Button } from "../Button";

type iTitleProductProps = {
  brand: string | undefined;
  kilometers: number | undefined;
  year: string | undefined;
  price: number | undefined;
  model: string | undefined;
};

export const TitleProduct = ({
  brand,
  kilometers,
  year,
  price,
  model,
}: iTitleProductProps) => {
  return (
    <div className="p-6 bg-white-fixed flex flex-col gap-6 rounded-2 md:relative">
      <h2 className="text-heading-6 font-600 text-grey-1">
        {" "}
        {brand} - {model}
      </h2>
      <div className="flex gap-2">
        <span className="text-brand-1 bg-brand-4 text-body-2 py-1 px-2 rounded-1 ">
          {year}
        </span>
        <span className="text-brand-1 bg-brand-4 text-body-2 py-1 px-2 rounded-1">
          {kilometers} km
        </span>
      </div>
      <p className="text-heading-7 font-500 text-grey-1 md:absolute right-6 bottom-20">
        R$ {price}
      </p>
      <Button variant="brand1" size="medium" text="Comprar" />
    </div>
  );
};
