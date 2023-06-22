import { useForm } from "react-hook-form";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { Input } from "../Input";
import { iAddressProps, iRegisterFormValues } from "../FormRegister/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, addressSchema } from "../FormRegister/registerSchema";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";

interface iEditAddress {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditAddress = ({ setOpen }: iEditAddress) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iAddressProps>({
    mode: "onBlur",
    resolver: zodResolver(addressSchema),
  });

  const submit = (data: any) => {
    console.log(data);
  };

  console.log("errors", errors, "valid", isValid);

  return (
    <div className="min-h-full overflow-y-auto flex items-center justify-center px-5 py-10">
      <form
        onSubmit={handleSubmit(submit)}
        className=" flex flex-col gap-y-6 bg-white-fixed rounded-md min-w-[346px] max-w-[520px] h-[605px] m-auto mt-16"
      >
        <div className="ml-10 mr-10 mt-4">
          <div className="h-[50px] flex justify-between">
            <p className="">Editar Endereço</p>
            <p
              onClick={() => setOpen(false)}
              className="text-grey-3 cursor-pointer"
            >
              X
            </p>
          </div>
          <HeadingTextBody tag="body-2-500">
            Infomações de endereço
          </HeadingTextBody>
          <div className="mt-[24px]">
            <Input
              className="max-w-[440px]"
              id="cep"
              label="CEP"
              type="text"
              placeholder="00000.000"
              register={register("cep")}
              disabled={loading}
            />
            {errors.cep && <span>{errors.cep.message}</span>}
          </div>
          <div className="flex gap-[11px] mt-[24px]">
            <Input
              id="state"
              label="Estado"
              type="text"
              placeholder="Digite estado"
              register={register("state")}
              disabled={loading}
            />
            {errors?.state && <span>{errors?.state.message}</span>}
            <Input
              id="city"
              label="Cidade"
              type="text"
              placeholder="Digitar cidade"
              register={register("city")}
              disabled={loading}
            />
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <div className="mt-[24px]">
            <Input
              className="max-w-[440px]"
              id="street"
              label="Rua"
              type="text"
              placeholder="Digitar sua rua"
              register={register("street")}
              disabled={loading}
            />
            {errors?.street && <span>{errors?.street.message}</span>}
          </div>
          <div className="flex gap-[11px] mt-[24px]">
            <Input
              id="number"
              label="Número"
              type="text"
              placeholder="Digitar número"
              register={register("number")}
              disabled={loading}
            />
            {errors?.number && <span>{errors.number.message}</span>}
            <Input
              id="addOn"
              label="Complemento"
              type="text"
              placeholder="Ex: apart 307"
              register={register("addOn")}
              disabled={loading}
            />
            {errors?.addOn && <span>{errors.addOn.message}</span>}
          </div>
          <div className="flex gap-[11px] justify-end mt-[36px]">
            <Button
              onClick={() => setOpen(false)}
              text="Cancelar"
              size="medium"
              variant="greyDisable"
            ></Button>
            <Button
              className="bg-brand-3 text-white-fixed"
              type="submit"
              text="Salvar Alterações"
              size="big"
              variant="brandDisable"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};
