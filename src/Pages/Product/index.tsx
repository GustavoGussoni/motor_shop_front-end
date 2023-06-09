import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { AsideProfile } from "../../Components/Aside/Profile";
import { DescriptionProduct } from "../../Components/DescriptionProduct";
import { Coments } from "../../Components/Coments";
import { ImageProduct } from "../../Components/ImageProduct";
import { TitleProduct } from "../../Components/TitleProduct";

export const Product = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <section className="sm:w-[70%] self-center">
          <ImageProduct />
          <TitleProduct />
          <DescriptionProduct />
        </section>
        <section className="sm:w-full sm:max-w-7xl">
          <AsideProfile />
        </section>
      </main>
      <section>
        <Coments />
      </section>
      <Footer />
    </React.Fragment>
  );
};
