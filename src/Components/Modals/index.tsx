import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { iModalProps } from "./@types";
import { EditAddress } from "../Form/FormEditAddress";
import { FormProfileEdit } from "../Form/FromProfileEdit";
import { DeleteAnnoucement } from "../DeleteAnnoucement";

export const Modal = ({ typeModal }: iModalProps) => {
    const { isOpen, setIsOpen } = useContext(AuthContext);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const switchModal = () => {
        switch (typeModal) {
            case "editAddress":
                return <EditAddress />;
            case "editProfile":
                return <FormProfileEdit />;
            case "deleteAnnoucement":
                return <DeleteAnnoucement />;
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[520px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative top-10 flex flex-col gap-[20px]'>
                                {switchModal()}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
