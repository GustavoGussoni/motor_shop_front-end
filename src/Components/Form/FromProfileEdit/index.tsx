import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateEditProfileSchema } from "./editProfileSchema";
import { useContext, useState } from "react";
import { iProfileEditProps } from "./@types";
import { SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Input } from "../Input";
import { HeadingTextBody } from "../../../Style/HeadingBodyText";
import { Button } from "../../Button";
import { TextArea } from "../InputTextArea";
import { ModalDefault } from "../../ModalDefault";
import { DeleteAccount } from "../../DeleteAccount";

export const FormProfileEdit = () => {
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);
  const { userUpdateProfile, setLoading, setIsOpen, user } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProfileEditProps>({
    mode: "onBlur",
    resolver: zodResolver(updateEditProfileSchema),
  });

  const submit: SubmitHandler<iProfileEditProps> = (data) => {
    userUpdateProfile(data, setLoading, user?.id);
    setIsOpen(false);
  };

  return (
    <form
      className="flex flex-col gap-y-6 w-[466px] self-center"
      onSubmit={handleSubmit(submit)}
    >
      <ModalDefault open={openDeleteAccount} setOpen={setOpenDeleteAccount}>
        <DeleteAccount setOpenAccount={setOpenDeleteAccount} />
      </ModalDefault>
      <HeadingTextBody tag="body-2-500">Infomações pessoais</HeadingTextBody>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Ex: Nome Sobrenome"
        register={register("name")}
        defaultValue={user?.name}
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
        defaultValue={user?.email}
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
        defaultValue={user?.cpf}
      />
      {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
      <Input
        id="cellphone"
        label="Celular"
        type="text"
        placeholder="(DDD) 90000-0000"
        register={register("cellphone")}
        defaultValue={user?.cellphone}
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
        defaultValue={user?.birthdate.substring(0, 10)}
      />
      {errors.birthdate && (
        <span className="text-red-500">{errors.birthdate.message}</span>
      )}
      <TextArea
        id="description"
        label="Descrição"
        placeholder="Digitar descrição"
        register={register("description")}
        defaultValue={user?.description}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
      <div className="flex gap-[10px] justify-between w-full">
        <Button
          variant="grey6"
          size="big"
          text="Cancelar"
          type="button"
          className="self-center w-[150px]"
          onClick={() => setIsOpen(false)}
        />
        <Button
          variant="alert"
          size="big"
          text="Exluir perfil"
          type="button"
          className="self-center w-[150px] p-0 py-[10px]"
          onClick={() => setOpenDeleteAccount(true)}
        />
        <Button
          variant="brand1"
          size="big"
          text="Salvar alterações"
          type="submit"
          className="self-center w-[150px] p-0 py-[10px]"
        />
      </div>
    </form>
  );
};
