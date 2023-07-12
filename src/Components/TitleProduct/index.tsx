import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { Button } from "../Button";
import { parseCookies } from "nookies";

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
  
  const { user } = useContext(AuthContext);
  const cookies = parseCookies();
  const { user_token } = cookies;
  const redirectApp = (url: string) => {
    window.location.href = url;
  };
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
      {user && user_token && (
        <Button
          variant="brand1"
          size="medium"
          text="Comprar"
          onClick={() =>
            redirectApp(
              "https://wa.me/+55011941652963?text=Oi%2C%20tudo%20bem%3F%20Estou%20entrando%20em%20contato%20referente%20ao%20produto%20do%20Motor%20Sports"
            )
          }
        />
      )}
    </div>
  );
};
