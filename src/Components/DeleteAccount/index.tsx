import { AuthContext } from "../../Contexts/AuthContext";
// import { iAnnouncementProps } from "../../Contexts/AuthContext/@types";
import { HeadingText } from "../../Style/HeadingText";
import { Button } from "../Button";
import { useContext, useState } from "react";

interface iDeleteAccountProps {
    setOpenAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteAccount = ({ setOpenAccount }: iDeleteAccountProps) => {
    const [loading, setLoading] = useState(false);
    const { user, userDeleteProfile } = useContext(AuthContext);

    const deleteUser = (userId: string | undefined) => {
        userDeleteProfile(userId, setLoading);
    };

    return (
        <div className='w-full max-w-[520px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all m-auto mt-[100px] flex flex-col gap-[20px]'>
            <div>
                <div className='flex justify-between pt-[16px] pb-[16px]'>
                    <HeadingText className='text-grey-1' tag='heading-7-600'>
                        Excluir conta
                    </HeadingText>
                    <p className='cursor-pointer text-grey-3' onClick={() => setOpenAccount(false)}>
                        X
                    </p>
                </div>
                <HeadingText className='text-grey-1 mt-4 mb-10' tag='heading-7-600'>
                    Tem certeza que deseja remover esta conta?
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
                    onClick={() => setOpenAccount(false)}
                ></Button>
                <Button
                    onClick={() => deleteUser(user?.id)}
                    text='Sim, excluir minha conta'
                    size='big'
                    variant='alert'
                ></Button>
            </div>
        </div>
    );
};
