import React from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FormRegister } from "../../Components/Form/FormRegister";
import { HeadingText } from "../../Style/HeadingText";

export const Register = () => {
  return (
    <div className="w-screen bg-grey-8 flex flex-col justify-between">
      <Header />
      <main className="flex items-center">
        <div className="max-w-[411px] w-full bg-grey-10 px-[48px] py-[44px] flex flex-col gap-[32px]">
          <HeadingText tag="heading-5-500">Cadastro</HeadingText>
          <FormRegister />
        </div>
      </main>
      <Footer />
    </div>
  );
};
