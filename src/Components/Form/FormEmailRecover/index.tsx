import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { Button } from "../../Button/index";
import { FormEmailSchema } from "./schema";
import { iFormEmailRecover } from "./@types";
import { Dialog } from "@headlessui/react";
import { api } from "../../../Services/index";
import { toast } from "react-toastify";

interface iFormEmailRecoverProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEmailRecover = ({ setOpen }: iFormEmailRecoverProps) => {
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
      return request;
    } catch (err: unknown) {
      toast.error("Erro no servidor");
    }
  };

  const submit: SubmitHandler<iFormEmailRecover> = (data) => {
    inviteEmail(data).then((res) => res?.status === 200 && setOpen(false));
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
        <div className="flex flex-row gap-4 justify-center items-center self-end">
          <Button
            variant="light"
            size="medium"
            text="Cancelar"
            type="button"
            className="max-w-[315px]"
            onClick={() => setOpen(false)}
          />
          <Button
            variant="brand1"
            disabled={false}
            size="medium"
            text="Enviar"
            type="button"
            className="max-w-[315px]"
            onClick={handleSubmit(submit)}
          />
        </div>
      </form>
    </div>
  );
};
