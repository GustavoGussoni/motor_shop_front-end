import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { AsideProfile } from "../../Components/Aside/Profile";
import { CarImages } from "../../Components/Aside/CarImages";
import { DescriptionProduct } from "../../Components/DescriptionProduct";
import { Coments } from "../../Components/Coments";
import { ImageProduct } from "../../Components/ImageProduct";
import { TitleProduct } from "../../Components/TitleProduct";
import { AuthContext } from "../../Contexts/AuthContext";
import { useEffect, useContext, useState } from "react";

export const Product = () => {
  const { allAnnouncements, announcement, announcementId, setAnnouncement, setComments } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAnnouncement = async () => {
      try {
        scrollTo(0, 0);
        allAnnouncements.filter((el) => {
          if (el.id === announcementId) {
            setComments(el.comments)
            setAnnouncement(el);
          }
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getAnnouncement();
  }, []);

  if (!isLoading) {
    return (
      <div className="bg-gray-100 max-h-full">
        <Header />
        <div className="relative z-[1] bg-brand-1 h-[35rem]" />
        <div className="bg-gray-100 absolute top-[78px] w-full">
          <main className="px-14 w-full flex items-center justify-center sm:justify-center flex-col sm:flex-row">
            <section className="z-[1] flex flex-col max-w-[752px] sm:w-[60%] gap-5 self-start ">
              <ImageProduct announcement_image={announcement?.cover_image} />
              <TitleProduct
                brand={announcement?.brand}
                kilometers={announcement?.kilometers}
                year={announcement?.year}
                price={announcement?.price}
                model={announcement?.model}
              />
              <DescriptionProduct description={announcement?.description} />
            </section>
            <section className="flex gap-8 w-[100%] flex-col justify-end self-start z-[1] sm:w-[40%] sm:max-w-[440px]">
              <aside className="bg-white max-h-[351px] rounded-2 flex flex-col items-center gap-4 w-full p-[25px] pt-[21px] h-auto sm:flex sm:items-center sm:justify-center">
                <h1 className="self-center text-heading-6 font-600">Fotos</h1>
                <div className="flex gap-[15px] flex-wrap items-center gap-y-[25px] sm:gap-[4px] justify-center overflow-auto">
                  {announcement?.image_gallery ? (
                    announcement?.image_gallery.map((el) => {
                      return <CarImages data={el} />;
                    })
                  ) : (
                    <p>Carregando fotos...</p>
                  )}
                </div>
              </aside>
              <AsideProfile />
            </section>
          </main>
          <div className="px-14 w-full flex items-center gap-[1.5rem] justify-center sm:justify-center flex-col sm:flex-row">
            <section className="z-[1] flex flex-col max-w-[752px] sm:w-[60%] gap-5 self-start ">
              <Coments />
            </section>
            <section className="flex gap-8 flex-col justify-end self-start z-[1] sm:w-[40%] sm:max-w-[440px]"></section>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 max-h-full">
      <Header />
      <div className="relative z-[1] bg-brand-1 h-[35rem]" />
      <h1>Carregando...</h1>
    </div>
  );
};
