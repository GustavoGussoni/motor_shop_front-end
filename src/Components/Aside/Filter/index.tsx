import { useState } from "react";
import { HeadingText } from "../../../Style/HeadingText";
import { InputNumber } from "./InputNumber";

const AsideFilter = ({ className }: any) => {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <section>
      <aside className={`flex flex-col gap-10 w-72 ${className}`}>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Marca
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              General Motors
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Fiat
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Ford
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Honda
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Porsche
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Volkswagen
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Modelo
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Civic
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Corolla
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Cruze
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Fit
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Gol
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Ka
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Onix
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Pulse
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Cor
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Azul
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Branco
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Cinza
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Prata
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Preto
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Verde
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Ano
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2023
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2022
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2021
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2020
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2019
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              2018
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Comubstível
          </HeadingText>
          <div className="flex flex-col ml-2 mt-5">
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Diesel
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Etanol
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Gasolina
            </HeadingText>
            <HeadingText
              tag="heading-6-500"
              className="text-grey-3 cursor-pointer"
              onClick={(e) => setFilter((e.target as HTMLElement).innerText)}
            >
              Flex
            </HeadingText>
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Km
          </HeadingText>
          <div className="flex gap-10 mt-5">
            <InputNumber placeholder="Mínimo" />
            <InputNumber placeholder="Máximo" />
          </div>
        </div>
        <div className="flex flex-col">
          <HeadingText
            tag="heading-4-600"
            className="text-black-fixed cursor-pointer"
          >
            Preço
          </HeadingText>
          <div className="flex gap-10 mt-5">
            <InputNumber placeholder="Mínimo" />
            <InputNumber placeholder="Máximo" />
          </div>
        </div>
      </aside>
    </section>
  );
};

export { AsideFilter };
