import { HeadingText } from "../../Style/HeadingText";
import { Button } from "../Button";

export interface iDeleteCommentsProps {
    setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteComment = ({ setOpenDelete }: iDeleteCommentsProps) => {
    return (
        <div className='w-full max-w-[520px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all m-auto mt-[100px] flex flex-col gap-[20px]'>
            <div>
                <div className='flex justify-between pt-[16px] pb-[16px]'>
                    <HeadingText className='text-grey-1' tag='heading-7-600'>
                        Excluir comentário
                    </HeadingText>
                    <p className='cursor-pointer text-grey-3' onClick={() => setOpenDelete(false)}>
                        X
                    </p>
                </div>
                <HeadingText className='text-grey-1 mt-4 mb-10' tag='heading-7-600'>
                    Tem certeza que deseja remover este comentado?
                </HeadingText>
            </div>
            <div className='flex justify-end gap-2'>
                <Button
                    text='Cancelar'
                    size='big'
                    variant='greyDisable'
                    onClick={() => setOpenDelete(false)}
                ></Button>
                <Button
                    text='Sim, excluir comentário'
                    size='big'
                    variant='alert'
                    onClick={() => console.log('oi')}
                ></Button>
            </div>
        </div>
    );
};
