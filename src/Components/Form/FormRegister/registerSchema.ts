import * as z from "zod";

const addressSchema = z.object({
  cep: z
    .string()
    .nonempty("CEP é obrigatório")
    .min(8, "Insira um CEP válido")
    .max(9, "Insira um CEP válido"),
  state: z.string().nonempty("UF é obrigatório").max(2, "Insira um UF válido"),
  city: z
    .string()
    .nonempty("Cidade é obrigatório")
    .max(50, "Insira um nome de cidade válido"),
  number: z.string().nonempty("Numero é obrigatório"),
  addOn: z.string().nullish(),
  street: z
    .string()
    .nonempty("Rua é obrigatória")
    .max(255, "Insira uma rua de endereço válida"),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty("Nome é obrigatório")
      .max(150, "O maximo de character é de 150"),
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Insira um e-mail válido")
      .max(254, "O máximo de character é de 254"),
    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .max(12, "Insira um cpf válido"),
    cellphone: z
      .string()
      .nonempty("Numero de celular é obrigatório")
      .max(11, "Insira um número de celular válido"),
    birthdate: z.string().nonempty("Data de nascimento é obrigatória"),
    description: z.string().nullish(),
    is_advertiser: z.string().nonempty(),
    address: addressSchema,
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "A senha deve contér no minímo 8 characters"),
    confirmPassword: z.string().nonempty("Confirmação de senha obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });
