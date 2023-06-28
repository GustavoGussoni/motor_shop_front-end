import * as z from "zod";

export const FormEmailSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Insira um e-mail válido")
    .max(254, "O máximo de character é de 254"),
});
