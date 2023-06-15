import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { AsideProfile } from "../../Components/Aside/Profile";
import { CarImages } from "../../Components/Aside/CarImages";
import { DescriptionProduct } from "../../Components/DescriptionProduct";
import { Coments } from "../../Components/Coments";
import { ImageProduct } from "../../Components/ImageProduct";
import { TitleProduct } from "../../Components/TitleProduct";

export const Product = () => {
  return (
    <div className="bg-gray-100 max-h-full">
      <Header />
      <div className="relative z-[1] bg-brand-1 h-[35rem]" />
      <div className="bg-gray-100 absolute top-[78px] w-full">
        <main className="px-14 w-full flex items-center justify-center sm:justify-center flex-col sm:flex-row">
          <section className="z-[1] flex flex-col max-w-[752px] sm:w-[60%] gap-5 self-start ">
            <ImageProduct />
            <TitleProduct />
            <DescriptionProduct />
          </section>
          <section className="flex gap-8 flex-col justify-end self-start z-[1] sm:w-[40%] sm:max-w-[440px]">
            <CarImages />
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
};
