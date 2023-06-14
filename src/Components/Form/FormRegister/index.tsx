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
  const [advertiser, setAdvertiser] = useState(false);
  const { userRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });
  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    console.log(data);
    // userRegister(data, setLoading);
  };

  const handleChoices = (choice: boolean) => {
    setAdvertiser(choice);
  };

  return (
    <form className="flex flex-col gap-y-6 " onSubmit={handleSubmit(submit)}>
      <HeadingTextBody tag="body-2-600">Infomações pessoais</HeadingTextBody>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Ex: Nome Sobrenome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Ex: usuario@provedor.com"
        register={register("email")}
        disabled={loading}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <Input
        id="cpf"
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        register={register("cpf")}
        disabled={loading}
      />
      {errors.cpf && <span>{errors.cpf.message}</span>}
      <Input
        id="cellphone"
        label="Celular"
        type="text"
        placeholder="(DDD) 90000-0000"
        register={register("cellphone")}
        disabled={loading}
      />
      {errors.cellphone && <span>{errors.cellphone.message}</span>}
      <Input
        id="birthdate"
        label="Data de nascimento"
        type="date"
        placeholder="00/00/00"
        register={register("birthdate")}
        disabled={loading}
      />
      {errors.birthdate && <span>{errors.birthdate.message}</span>}
      <Input
        id="description"
        label="Descrição"
        type="text"
        placeholder="Digitar descrição"
        register={register("description")}
        disabled={loading}
      />
      {errors.description && <span>{errors.description.message}</span>}
      <HeadingTextBody tag="body-2-600">Infomações de endereço</HeadingTextBody>
      <Input
        id="cep"
        label="CEP"
        type="text"
        placeholder="00000.000"
        register={register("address.cep")}
        disabled={loading}
      />
      {errors.address?.cep && <span>{errors.address.cep.message}</span>}
      <div className="flex gap-[11px]">
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
      <Input
        id="street"
        label="Rua"
        type="text"
        placeholder="Digitar sua rua"
        register={register("address.street")}
        disabled={loading}
      />
      {errors.address?.street && <span>{errors.address.street.message}</span>}
      <div>
        <Input
          id="number"
          label="Número"
          type="text"
          placeholder="Digitar número"
          register={register("address.number")}
          disabled={loading}
        />
        {errors.address?.number && <span>{errors.address.number.message}</span>}
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
      <HeadingTextBody tag="body-2-600">Tipo de conta</HeadingTextBody>
      <div className="flex gap-[11px] justify-between">
        {/* <label>
          <input
            type="radio"
            value="opcao1"
            {...register("is_advertiser", { required: true })}
          />
          Opção 1
        </label>
        <label>
          <input
            type="radio"
            value="opcao1"
            {...register("is_advertiser", { required: true })}
          />
          Opção 1
        </label> */}
        <InputRadio
          id="advertiserFalse"
          value="false"
          register={register("is_advertiser")}
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
          register={register("is_advertiser")}
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
      {errors.password && <span>{errors.password.message}</span>}
      <Input
        id="confirmPassword"
        label="Confirmar senha"
        type="password"
        placeholder="Digitar senha"
        register={register("confirmPassword")}
        disabled={loading}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      <Button
        variant="brand1"
        size="big"
        text="Finalizar cadastro"
        type="submit"
        className="self-center max-w-[315px] w-full"
        disabled={!isValid}
      />
    </form>
  );
};
