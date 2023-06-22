import { useForm } from "react-hook-form";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { Input } from "../Input";
import { iRegisterFormValues } from "../FormRegister/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../FormRegister/registerSchema";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";

interface iEditAddress {
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditAddress = ({ setOpenEdit }: iEditAddress) => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<iRegisterFormValues>({
        mode: "onBlur",
        resolver: zodResolver(addressSchema),
    });

    const onSubmit = (data: object) => {
        console.log("data");
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
                        register={register("address.cep")}
                        disabled={loading}
                        defaultValue={user?.address?.cep}
                    />
                    {errors.address?.cep && <span>{errors.address.cep.message}</span>}
                </div>
                <div className='flex gap-[11px] mt-[24px]'>
                    <Input
                        id='state'
                        label='Estado'
                        type='text'
                        placeholder='Digite estado'
                        register={register("address.state")}
                        disabled={loading}
                        defaultValue={user?.address?.state}
                    />
                    {errors.address?.state && <span>{errors.address.state.message}</span>}
                    <Input
                        id='city'
                        label='Cidade'
                        type='text'
                        placeholder='Digitar cidade'
                        register={register("address.city")}
                        disabled={loading}
                        defaultValue={user?.address?.city}
                    />
                    {errors.address?.city && <span>{errors.address.city.message}</span>}
                </div>
                <div className='mt-[24px]'>
                    <Input
                        className='max-w-[440px]'
                        id='street'
                        label='Rua'
                        type='text'
                        placeholder='Digitar sua rua'
                        register={register("address.street")}
                        disabled={loading}
                        defaultValue={user?.address?.street}
                    />
                    {errors.address?.street && <span>{errors.address.street.message}</span>}
                </div>
                <div className='flex gap-[11px] mt-[24px]'>
                    <Input
                        id='number'
                        label='Número'
                        type='text'
                        placeholder='Digitar número'
                        register={register("address.number")}
                        disabled={loading}
                        defaultValue={user?.address?.number}
                    />
                    {errors.address?.number && <span>{errors.address.number.message}</span>}
                    <Input
                        id='addOn'
                        label='Complemento'
                        type='text'
                        placeholder='Ex: apart 307'
                        register={register("address.addOn")}
                        disabled={loading}
                        defaultValue={user?.address?.add_on}
                    />
                    {errors.address?.addOn && <span>{errors.address.addOn.message}</span>}
                </div>
                <div className='flex gap-[11px] justify-end mt-[36px]'>
                    <Button
                        onClick={() => setOpenEdit(false)}
                        text='Cancelar'
                        size='medium'
                        variant='greyDisable'
                    ></Button>
                    <Button
                        // onClick={() => {
                        //     handleSubmit(onSubmit);
                        //     setOpenEdit(false);
                        // }}
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
