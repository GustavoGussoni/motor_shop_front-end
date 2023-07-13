import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { Button } from "../../Button/index";
import { FormPasswordSchema } from "./schema";
import { iFormPasswordRecover } from "./@types";
import { api } from "../../../Services/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface iFormPasswordRecoverProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
}

export const FormPasswordRecover = ({
  token,
  setOpen,
}: iFormPasswordRecoverProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormPasswordRecover>({
    mode: "onBlur",
    resolver: zodResolver(FormPasswordSchema),
  });

  const navigate = useNavigate();

  const updatePassword = async (data: iFormPasswordRecover, token: string) => {
    try {
      const request = await api.patch(`users/resetPassword/${token}`, data);

      toast.success("Senha alterada com sucesso");

      return request;
    } catch (err: any) {
      console.log(err);
      toast.error(`${err.response.data.message}, token expired`);
    }
  };

  const submit: SubmitHandler<iFormPasswordRecover> = (data) => {
    if (token) {
      updatePassword(data, token).then(() => {
        navigate("/login");
        setOpen(false);
      });
    }
  };

  return (
    <div className=" overflow-y-auto flex justify-center py-12 ">
      <form
        className="flex flex-col items-center gap-4 justify-center bg-grey-10 p-8 rounded-2"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="self-start text-heading-7 font-500 relative right-2">
          Recuperação de senha
        </h2>
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
        {/* {errors?.confirm && (
          <span className="text-red-500 text-start text-body-2 pl-2 w-full">
            {errors.confirm.message}
          </span>
        )} */}

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
          text="Voltar para a página login"
          type="button"
          className="self-center max-w-[315px] w-full"
          onClick={() => {
            navigate("/login");
            setOpen(false);
          }}
        />
      </form>
    </div>
  );
};
