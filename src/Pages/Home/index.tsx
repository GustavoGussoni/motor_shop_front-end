import React, { useEffect, useState } from "react";
import { AsideFilter } from "../../Components/Aside/Filter";
import { Footer } from "../../Components/Footer";
import { HeadingText } from "../../Style/HeadingText";
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { useContext } from "react";
import img from "../../Assets/embargo_23_01_bst_15_july_2020_911_turbo_rear_three_quarter-removebg.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { Button } from "../../Components/Button";

export const Home = () => {
  const {
    setFilter,
    renderAll,
    announcementsFiltered,
    setRenderAll,
    user,
    getAllAnnouncement,
    allAnnouncements,
    isOpen,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAnnoucements = async () => {
      setRenderAll(true);
      try {
        await getAllAnnouncement();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getAnnoucements();
  }, []);

  if (isLoading || !allAnnouncements) {
    return (
      <div className="bg-gray-100 max-h-full">
        <Header />
        <div className="relative z-[1] bg-brand-1 h-[17rem]" />
        <div className="bg-gray-100 absolute top-[78px] h-[100vh] w-full">
          <main>
            <HeadingText className="z-[2] text-white" tag="heading-6-600">
              Carregando...
            </HeadingText>
          </main>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <div className="bg-gradient-to-b flex relative items-center justify-center h-[40rem]  from-brand-4 to-grey-0 to-90%">
        <div className="w-full max-w-[1500px] h-full bg-img" />
        <div className="absolute gap-2 flex w-full flex-col items-center justify-center">
          <HeadingText
            tag="heading-2-600"
            className="text-brand-4  bg-gray-600 bg-opacity-[0.3] "
          >
            Motors Shop
          </HeadingText>

          <HeadingText
            tag="heading-5-500"
            className="text-gray-50 bg-gray-600 bg-opacity-[0.6] w-[80%] max-w-[555px] px-1 rounded-1 text-center"
          >
            A melhor plataforma de anúncios de carros do país
          </HeadingText>
        </div>
      </div>
      <main className="flex flex-col w-full max-w-full container justify-center items-center sm:mx-auto sm:justify-between sm:w-full">
        <div className="flex w-full flex-row sm:justify-between sm:w-full">
          <AsideFilter className="hidden sm:flex " />
          <ul className="flex flex-nowrap flex-row justify-start gap-[46px] overflow-x-auto max-w-full sm:w-full sm:gap-2 sm:max-w-full sm:h-full sm:items-start sm:justify-start sm:flex-wrap sm:overflow-x-hidden">
            {!isLoading ? (
              renderAll ? (
                allAnnouncements.map((an) => {
                  return <Card key={an.id} data={an} />;
                })
              ) : (
                announcementsFiltered.map((an) => {
                  return <Card key={an.id} data={an} />;
                })
              )
            ) : (
              <h1>Carreggando dados...</h1>
            )}
          </ul>
        </div>
        <div className="flex max-w-[279px] w-[100%] justify-center flex-col self-center sm:flex-row gap-10 mb-11 mt-12">
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
          <Button
            variant="brand1"
            size="medium"
            text="Filtro"
            // onClick={() => ())
            className="max-w-[279px] w-full  sm:hidden "
          />
          {/* <HeadingText tag="heading-5-600" className="text-brand-2">
            {"Seguinte >"}
          </HeadingText> */}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};
