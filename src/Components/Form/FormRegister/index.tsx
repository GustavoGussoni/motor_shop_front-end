import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./registerSchema";
import { useContext, useState } from "react";
import { iRegisterFormValues } from "./@types";
import { SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Input } from "../Input";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { InputRadio } from "../InputRadio";

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const { authCep, cep, userRegister, setIsOpen, setTypeModal } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });
  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    delete data.confirmPassword;
    if (data.is_advertiser === "true") {
      data["is_advertiser"] = true;
    }

    if (data.is_advertiser === "false") {
      data["is_advertiser"] = false;
    }
    if (typeof data.address.number === "string") {
      const newValue = data.address.number;
      data.address.number = Number(newValue);
    }
    console.log(data);
    userRegister(data, setLoading);
    setIsOpen(false);
  };

  return (
    <form className="flex flex-col gap-y-6 " onSubmit={handleSubmit(submit)}>
      <HeadingTextBody tag="body-2-500">Infomações pessoais</HeadingTextBody>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Ex: Nome Sobrenome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Ex: usuario@provedor.com"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <Input
        id="cpf"
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register("cpf")}
        disabled={loading}
      />
      {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
      <Input
        id="cellphone"
        label="Celular"
        type="text"
        placeholder="(DDD) 90000-0000"
        register={register("cellphone")}
        disabled={loading}
      />
      {errors.cellphone && (
        <span className="text-red-500">{errors.cellphone.message}</span>
      )}
      <Input
        id="birthdate"
        label="Data de nascimento"
        type="date"
        placeholder="00/00/00"
        register={register("birthdate")}
        disabled={loading}
      />
      {errors.birthdate && (
        <span className="text-red-500">{errors.birthdate.message}</span>
      )}
      <Input
        id="description"
        label="Descrição"
        type="text"
        placeholder="Digitar descrição"
        register={register("description")}
        disabled={loading}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
      <HeadingTextBody tag="body-2-500">
        Informações de endereço
      </HeadingTextBody>
      <Input
        id="cep"
        label="CEP"
        type="text"
        placeholder="00000.000"
        register={register("address.cep")}
        disabled={loading}
        onChange={(e) => {
          if (e.target.value.length >= 8 && e.target.value.length <= 9) {
            authCep(e.target.value);
            if (cep) {
              setValue("address.state", cep.uf);
              setValue("address.city", cep.localidade);
              setValue("address.street", cep.logradouro);
            }
          }
        }}
      />
      {errors.address?.cep && (
        <span className="text-red-500">{errors.address.cep.message}</span>
      )}
      <div className="flex gap-[11px]">
        <Input
          id="state"
          label="Estado"
          type="text"
          placeholder="Digite estado"
          register={register("address.state")}
          disabled={loading}
        />
        {errors.address?.state && (
          <span className="text-red-500">{errors.address.state.message}</span>
        )}
        <Input
          id="city"
          label="Cidade"
          type="text"
          placeholder="Digitar cidade"
          register={register("address.city")}
          disabled={loading}
        />
        {errors.address?.city && (
          <span className="text-red-500">{errors.address.city.message}</span>
        )}
      </div>
      <Input
        id="street"
        label="Rua"
        type="text"
        placeholder="Digitar sua rua"
        register={register("address.street")}
        disabled={loading}
      />
      {errors.address?.street && (
        <span className="text-red-500">{errors.address.street.message}</span>
      )}
      <div className="flex gap-[11px]">
        <Input
          id="number"
          label="Número"
          type="text"
          placeholder="Digitar número"
          register={register("address.number")}
          disabled={loading}
        />
        {errors.address?.number && (
          <span className="text-red-500">{errors.address.number.message}</span>
        )}
        <Input
          id="addOn"
          label="Complemento"
          type="text"
          placeholder="Ex: apart 307"
          register={register("address.addOn")}
          disabled={loading}
        />
        {errors.address?.addOn && (
          <span className="text-red-500">{errors.address.addOn.message}</span>
        )}
      </div>
      <HeadingTextBody tag="body-2-500">Tipo de conta</HeadingTextBody>
      <div className="flex gap-[11px] justify-between">
        <InputRadio
          id="advertiserFalse"
          value="false"
          register={register("is_advertiser", { value: false })}
          disabled={loading}
          variant="brand1"
          size="medium"
          label="Comprador"
          className="max-w-[152px] w-full h-[48px] flex items-center justify-center"
          checked
        />
        <InputRadio
          id="advertiserTrue"
          value="true"
          register={register("is_advertiser", { value: true })}
          disabled={loading}
          variant="outline2"
          size="medium"
          label="Anunciante"
          className="max-w-[152px] w-full h-[48px] flex items-center justify-center"
        />
      </div>
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <Input
        id="confirmPassword"
        label="Confirmar senha"
        type="password"
        placeholder="Digitar senha"
        register={register("confirmPassword")}
        disabled={loading}
      />
      {errors.confirmPassword && (
        <span className="text-red-500">{errors.confirmPassword.message}</span>
      )}
      <Button
        variant="brand1"
        size="big"
        text="Finalizar cadastro"
        type="submit"
        className="self-center max-w-[315px] w-full"
        disabled={!isValid}
        onClick={() => {
          setTypeModal("registerSuccessfully");
        }}
      />
    </form>
  );
};
