import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { AsideProfile } from "../../Components/Aside/Profile";
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
        <main className="px-14 w-full flex items-center justify-center sm:justify-between flex-col sm:flex-row">
          <section className="z-[1] flex flex-col sm:w-[60%] gap-5 self-center ">
            <ImageProduct />
            <TitleProduct />
            <DescriptionProduct />
          </section>
          <section className="z-[1] sm:w-full sm:max-w-[40%]">
            <AsideProfile />
          </section>
        </main>
        <section className="bg-gray-100 px-14">
          <Coments />
        </section>
        <Footer />
      </div>
    </div>
  );
};
