import { useForm } from "react-hook-form";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { Input } from "../Input";
import { iAddressProps } from "../FormRegister/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateAddressSchema } from "../FormRegister/registerSchema";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { api } from "../../../Services";

interface iEditAddress {
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditAddress = ({ setOpenEdit }: iEditAddress) => {
    const [loading, setLoading] = useState(false);
    const { user, setIsOpen } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<iAddressProps>({
        mode: "onBlur",
        resolver: zodResolver(updateAddressSchema),
    });

    const editAddress = async (data: iAddressProps) => {
        const userId = user?.id;
        console.log(userId);
        try {
            setLoading(true);

            const response = await api.patch(`users/${userId}`, { address: data });
            console.log(response);

            console.log("Dados atualizados com sucesso:", response.data);
        } catch (error) {
            console.error("Erro ao atualizar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (data: iAddressProps) => {
        editAddress(data);
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-6 bg-white-fixed rounded-md w-full m-auto'
        >
            <div>
                <div className='h-[50px] flex justify-between'>
                    <p className='font-bold'>Editar Endereço</p>
                    <p
                        onClick={() => setOpenEdit(false)}
                        className='text-grey-3 font-bold cursor-pointer'
                    >
                        X
                    </p>
                </div>
                <HeadingTextBody tag='body-2-500' className='font-bold'>
                    Infomações de endereço
                </HeadingTextBody>
                <div className='mt-[24px]'>
                    <Input
                        className='max-w-[440px]'
                        id='cep'
                        label='CEP'
                        type='text'
                        placeholder='00000.000'
                        register={register("cep")}
                        disabled={loading}
                        defaultValue={user?.address?.cep}
                    />
                    {errors.cep && <span>{errors.cep.message}</span>}
                </div>
                <div className='flex gap-[11px] mt-[24px]'>
                    <Input
                        id='state'
                        label='Estado'
                        type='text'
                        placeholder='Digite estado'
                        register={register("state")}
                        disabled={loading}
                        defaultValue={user?.address?.state}
                    />
                    {errors.state && <span>{errors.state.message}</span>}
                    <Input
                        id='city'
                        label='Cidade'
                        type='text'
                        placeholder='Digitar cidade'
                        register={register("city")}
                        disabled={loading}
                        defaultValue={user?.address?.city}
                    />
                    {errors.city && <span>{errors.city.message}</span>}
                </div>
                <div className='mt-[24px]'>
                    <Input
                        className='max-w-[440px]'
                        id='street'
                        label='Rua'
                        type='text'
                        placeholder='Digitar sua rua'
                        register={register("street")}
                        disabled={loading}
                        defaultValue={user?.address?.street}
                    />
                    {errors.street && <span>{errors.street.message}</span>}
                </div>
                <div className='flex gap-[11px] mt-[24px]'>
                    <Input
                        id='number'
                        label='Número'
                        type='text'
                        placeholder='Digitar número'
                        register={register("number")}
                        disabled={loading}
                        defaultValue={user?.address?.number}
                    />
                    {errors.number && <span>{errors.number.message}</span>}
                    <Input
                        id='addOn'
                        label='Complemento'
                        type='text'
                        placeholder='Ex: apart 307'
                        register={register("addOn")}
                        disabled={loading}
                        defaultValue={user?.address?.add_on}
                    />
                    {errors.addOn && <span>{errors.addOn.message}</span>}
                </div>
                <div className='flex gap-[11px] justify-end mt-[36px]'>
                    <Button
                        onClick={() => setOpenEdit(false)}
                        text='Cancelar'
                        size='medium'
                        variant='greyDisable'
                    ></Button>
                    <Button
                        type='submit'
                        className='bg-brand-3 text-white-fixed'
                        text='Salvar Alterações'
                        size='big'
                        variant={isValid ? "brand1" : "brandDisable"}
                        // disabled={!isValid}
                    ></Button>
                </div>
            </div>
        </form>
    );
};
