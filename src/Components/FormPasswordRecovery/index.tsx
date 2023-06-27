import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Form/Input";
import { Button } from "../Button";
import { FormEmailSchema, FormPasswordSchema } from "./schema";
import { iFormEmailRecover, iFormPasswordRecover } from "./@types";
import { Dialog } from "@headlessui/react";
import { api } from "../../Services";
import { toast } from "react-toastify";

interface iFormEmailRecove {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEmailRecover = ({ setOpen }: iFormEmailRecove) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormEmailRecover>({
    mode: "onBlur",
    resolver: zodResolver(FormEmailSchema),
  });

  const inviteEmail = async (data: iFormEmailRecover) => {
    try {
      const request = await api.post("users/resetPassword", data);

      toast.success(request.data.message);
      return request.data;
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const submit: SubmitHandler<any> = (data) => {
    inviteEmail(data);
  };

  return (
    <div className=" overflow-y-auto flex justify-center pt-20 ">
      <form
        className="flex flex-col items-center gap-4 justify-center bg-grey-10 p-8 rounded-2"
        onSubmit={handleSubmit(submit)}
      >
        <Dialog.Title className="self-start text-heading-7 font-500 relative right-2">
          Recuperação de senha
        </Dialog.Title>
        <Input
          id="email"
          label="Email"
          type="text"
          placeholder="Digite seu email"
          register={register("email")}
          disabled={false}
        />
        {errors.email && (
          <span className="text-red-500 text-start text-body-2 pl-2 w-full">
            {errors.email.message}
          </span>
        )}
        <Button
          variant="brand1"
          disabled={false}
          size="medium"
          text="Enviar"
          type="button"
          className="self-end mt-4"
          onClick={handleSubmit(submit)}
        />
        <Button
          variant="light"
          size="medium"
          text="Cancelar"
          type="button"
          className="self-center max-w-[315px] w-full"
          onClick={() => setOpen(false)}
        />
      </form>
    </div>
  );
};

interface iFormPasswordRecove {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  token: any;
}

export const FormPasswordRecover = ({
  setOpen,
  token,
}: iFormPasswordRecove) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormPasswordRecover>({
    mode: "onBlur",
    resolver: zodResolver(FormPasswordSchema),
  });

  const updatePassword = async (data: any, token: string) => {
    try {
      const request = await api.patch(`users/resetPassword/${token}`, data);

      toast.success("Senha alterada com sucesso");

      return request;
    } catch (err) {
      toast.error(err.request.data.message);
    }
  };

  const submit: SubmitHandler<any> = (data) => {
    updatePassword(data, token);
  };

  console.log("errors", errors);

  return (
    <div className=" overflow-y-auto flex justify-center pt-20 ">
      <form
        className="flex flex-col items-center gap-4 justify-center bg-grey-10 p-8 rounded-2"
        onSubmit={handleSubmit(submit)}
      >
        <Dialog.Title className="self-start text-heading-7 font-500 relative right-2">
          Recuperação de senha
        </Dialog.Title>
        <Input
          id="password"
          label="Senha"
          type="text"
          placeholder="Digite sua nova senha"
          register={register("password")}
          disabled={false}
        />
        {errors.password && (
          <span className="text-red-500 text-start text-body-2 pl-2 w-full">
            {errors.password.message}
          </span>
        )}
        <Input
          id="confirmPassword"
          label="Confirmar senha"
          type="confirmPassword"
          placeholder="Digite a senha novamente"
          register={register("confirmPassword")}
          disabled={false}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-start text-body-2 pl-2 w-full">
            {errors.confirmPassword.message}
          </span>
        )}
        {errors?.confirm && (
          <span className="text-red-500 text-start text-body-2 pl-2 w-full">
            {errors.confirm.message}
          </span>
        )}

        <Button
          variant="brand1"
          size="big"
          text="Enviar"
          type="button"
          className="self-center max-w-[315px] w-full"
          onClick={handleSubmit(submit)}
        />
        <Button
          variant="light"
          size="big"
          text="Cancelar"
          type="button"
          className="self-center max-w-[315px] w-full"
          onClick={() => setOpen(false)}
        />
      </form>
    </div>
  );
};
