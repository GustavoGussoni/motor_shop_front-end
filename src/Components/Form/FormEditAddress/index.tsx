import { useForm } from "react-hook-form";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { Input } from "../Input";
import { iRegisterFormValues } from "../FormRegister/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../FormRegister/registerSchema";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";

export const EditAddress = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, setIsOpen } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <form className=" flex flex-col gap-y-6 bg-white-fixed rounded-md min-w-[346px] max-w-[520px] h-[605px] m-auto mt-16">
      <div className="ml-10 mr-10 mt-4">
        <div className="h-[50px] flex justify-between">
          <p className="">Editar Endereço</p>
          <p
            onClick={() => setIsOpen(false)}
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
            register={register("address.cep")}
            disabled={loading}
          />
          {errors.address?.cep && <span>{errors.address.cep.message}</span>}
        </div>
        <div className="flex gap-[11px] mt-[24px]">
          <Input
            id="state"
            label="Estado"
            type="text"
            placeholder="Digite estado"
            register={register("address.state")}
            disabled={loading}
          />
          {errors.address?.state && <span>{errors.address.state.message}</span>}
          <Input
            id="city"
            label="Cidade"
            type="text"
            placeholder="Digitar cidade"
            register={register("address.city")}
            disabled={loading}
          />
          {errors.address?.city && <span>{errors.address.city.message}</span>}
        </div>
        <div className="mt-[24px]">
          <Input
            className="max-w-[440px]"
            id="street"
            label="Rua"
            type="text"
            placeholder="Digitar sua rua"
            register={register("address.street")}
            disabled={loading}
          />
          {errors.address?.street && (
            <span>{errors.address.street.message}</span>
          )}
        </div>
        <div className="flex gap-[11px] mt-[24px]">
          <Input
            id="number"
            label="Número"
            type="text"
            placeholder="Digitar número"
            register={register("address.number")}
            disabled={loading}
          />
          {errors.address?.number && (
            <span>{errors.address.number.message}</span>
          )}
          <Input
            id="addOn"
            label="Complemento"
            type="text"
            placeholder="Ex: apart 307"
            register={register("address.addOn")}
            disabled={loading}
          />
          {errors.address?.addOn && <span>{errors.address.addOn.message}</span>}
        </div>
        <div className="flex gap-[11px] justify-end mt-[36px]">
          <Button
            onClick={() => setIsOpen(false)}
            text="Cancelar"
            size="medium"
            variant="greyDisable"
          ></Button>
          <Button
            className="bg-brand-3 text-white-fixed"
            onClick={() => setIsOpen(false)}
            text="Salvar Alterações"
            size="big"
            variant="brandDisable"
          ></Button>
        </div>
      </div>
    </form>
  );
};
