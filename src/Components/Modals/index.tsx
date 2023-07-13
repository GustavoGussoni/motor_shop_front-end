import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { iModalProps } from "./@types";
import { EditAddress } from "../Form/FormEditAddress";
import { FormProfileEdit } from "../Form/FromProfileEdit";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const Modal = ({ typeModal }: iModalProps) => {
  const { isOpen, setIsOpen } = useContext(AuthContext);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const switchModal = () => {
    switch (typeModal) {
      case "editAddress":
        return <EditAddress />;
      case "editProfile":
        return <FormProfileEdit />;
      case "registerSuccessfully":
        return (
          <div className="flex flex-col gap-[40px]">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Sucesso!
            </Dialog.Title>
            <div className="flex flex-col gap-[20px]">
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
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/login");
                  }}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[520px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative top-10 flex flex-col gap-[20px]">
                {switchModal()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
