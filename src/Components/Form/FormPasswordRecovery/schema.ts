import * as z from "zod";

export const FormEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Insira um e-mail válido")
    .max(254, "O máximo de character é de 254"),
});

export const FormPasswordSchema = z
  .object({
    password: z.string().nonempty(),
    confirmPassword: z.string().nonempty("Confirmação de senha obrigatória"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam correspondentes",
    path: ["confirmPassword"],
  });
