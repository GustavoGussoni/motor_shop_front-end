import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { FormRegister } from "../../Components/Form/FormRegister";
import { HeadingText } from "../../Style/HeadingText";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Modal } from "../../Components/Modals";
import { Dialog } from "@headlessui/react";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { isOpen } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="w-screen bg-grey-8 flex flex-col justify-between">
      {isOpen && (
        <Modal>
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Sucesso!
          </Dialog.Title>
          <Dialog.Title
            as="h3"
            className="text-lg font-600 leading-6 text-gray-900"
          >
            Sua conta foi criada com sucesso!
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
          </div>

          <div className="mt-4">
            <Button
              type="button"
              size="medium"
              variant="brand1"
              text="Ir para o login"
              className="outline-none px-[24px] py-[6px]"
              onClick={() => navigate("/login")}
            ></Button>
          </div>
        </Modal>
      )}
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
