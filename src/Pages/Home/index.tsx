import React from "react";
import { AsideFilter } from "../../Components/Aside/Filter";
import { Footer } from "../../Components/Footer";
import { HeadingText } from "../../Style/HeadingText";
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col container justify-center items-center sm:mx-auto sm:justify-between sm:w-full">
        <div className="bg-[url('./src/Assets/carBG.svg')] bg-auto bg-fixed">
          <div className="bg-black h-full w-full"></div>
        </div>
        <div className="flex flex-row sm:justify-between sm:w-full">
          <AsideFilter className="hidden sm:flex " />
          <ul className="flex flex-nowrap flex-row gap-4 overflow-x-auto max-w-sm sm:w-full sm:gap-2 sm:max-w-5xl sm:h-full sm:items-start sm:justify-start sm:flex-wrap sm:overflow-x-hidden">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
        <Button
          variant="brand1"
          size="medium"
          text="Filtro"
          onClick={(e) => console.log(e.target)}
        />
        <div className="flex flex-col self-center sm:flex-row gap-10 mb-11 mt-12">
          <div className="flex self-center">
            <HeadingText
              tag="heading-5-600"
              className="text-grey-3 mr-1 self-center"
            >
              1
            </HeadingText>
            <HeadingText tag="heading-5-500" className="text-grey-3">
              de 1
            </HeadingText>
          </div>
          {/* <HeadingText tag="heading-5-600" className="text-brand-2">
            {"Seguinte >"}
          </HeadingText> */}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};
