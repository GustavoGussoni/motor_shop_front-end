import * as z from "zod";

export const updateEditProfileSchema = z.object({
  name: z.string().max(150, "O maximo de character é de 150"),
  email: z
    .string()
    .email("Insira um e-mail válido")
    .max(254, "O máximo de character é de 254"),
  cpf: z.string().max(12, "Insira um cpf válido"),
  cellphone: z.string().max(11, "Insira um número de celular válido"),
  birthdate: z.string(),
  description: z.string(),
});
