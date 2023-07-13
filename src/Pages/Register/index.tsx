import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FormRegister } from "../../Components/Form/FormRegister";
import { HeadingText } from "../../Style/HeadingText";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Modal } from "../../Components/Modals";

export const Register = () => {
  const { isOpen, typeModal } = useContext(AuthContext);

  return (
    <div className="w-screen bg-grey-8 flex flex-col justify-between">
      {isOpen && <Modal typeModal={typeModal} />}
      <Header />
      <main className="flex mt-[66px] items-center">
        <div className="max-w-[411px] w-full bg-grey-10 px-[48px] py-[44px] flex flex-col gap-[32px]">
          <HeadingText tag="heading-5-500">Cadastro</HeadingText>
          <FormRegister />
        </div>
      </main>
      <Footer />
    </div>
  );
};
