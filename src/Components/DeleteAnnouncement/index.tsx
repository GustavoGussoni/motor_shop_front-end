import { AuthContext } from "../../Contexts/AuthContext";
import { iAnnouncementProps } from "../../Contexts/AuthContext/@types";
import { HeadingText } from "../../Style/HeadingText";
import { Button } from "../Button";
import { useContext } from "react";

interface iDeleteAnnouncementProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: iAnnouncementProps;
}

export const DeleteAnnouncement = ({ setOpen, data }: iDeleteAnnouncementProps) => {
    const { deleteAnnouncement } = useContext(AuthContext);

    return (
        <div className='w-full max-w-[520px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all m-auto mt-[100px] flex flex-col gap-[20px]'>
            <div>
                <div className='flex justify-between pt-[16px] pb-[16px]'>
                    <HeadingText className='text-grey-1' tag='heading-7-600'>
                        Excluir anúncio
                    </HeadingText>
                    <p className='cursor-pointer text-grey-3' onClick={() => setOpen(false)}>
                        X
                    </p>
                </div>
                <HeadingText className='text-grey-1 mt-4 mb-10' tag='heading-7-600'>
                    Tem certeza que deseja remover este anúncio?
                </HeadingText>
                <p className='text-grey-2 body-1-400 leading-[28px] mb-10'>
                    Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e
                    removerá seus dados de nossos servidores.
                </p>
            </div>
            <div className='flex justify-end gap-2'>
                <Button
                    text='Cancelar'
                    size='big'
                    variant='greyDisable'
                    onClick={() => setOpen(false)}
                ></Button>
                <Button
                    onClick={() => deleteAnnouncement(data.id)}
                    text='Sim, excluir anúncio'
                    size='big'
                    variant='alert'
                ></Button>
            </div>
        </div>
    );
};
