import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Form/Input";
import { Button } from "../Button";
import { FormEmailSchema, FormPasswordSchema } from "./schema";

export const FormEmailRecover = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onBlur",
    resolver: zodResolver(FormEmailSchema),
  });

  const submit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-y-6 " onSubmit={handleSubmit(submit)}>
      <Input
        id="email"
        label="Email"
        type="text"
        placeholder="Digitar email"
        register={register("email")}
        disabled={false}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <Button
        variant="light"
        size="big"
        text="Enviar para o email"
        type="button"
        className="self-center max-w-[315px] w-full"
      />
    </form>
  );
};

export const FormPasswordRecover = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onBlur",
    resolver: zodResolver(FormPasswordSchema),
  });

  const submit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-y-6 " onSubmit={handleSubmit(submit)}>
      <Input
        id="password"
        label="Senha"
        type="text"
        placeholder="Digite sua senha"
        register={register("password")}
        disabled={false}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digitar senha"
        register={register("password")}
        disabled={false}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <Button
        variant="light"
        size="big"
        text="Cadastrar"
        type="button"
        className="self-center max-w-[315px] w-full"
      />
    </form>
  );
};
