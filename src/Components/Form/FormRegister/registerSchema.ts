import * as z from "zod";

const addressSchema = z.object({
  cep: z.string().nonempty(),
  state: z.string().nonempty(),
  city: z.string().nonempty(),
  number: z.string(),
  addOn: z.string().nullish(),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .nonempty("Precisa conter pelo menos 1 character")
    .max(150, "O maximo de character é de 150"),
  email: z
    .string()
    .nonempty()
    .email("Insira um e-mail válido")
    .max(254, "O máximo de character é de 254"),
  cpf: z.string().nonempty().max(12, "Insira um cpf válido"),
  cellphone: z
    .string()
    .nonempty()
    .max(11, "Insira um número de celular válido"),
  birthdate: z.string().nonempty(),
  description: z.string().nullish(),
  is_advertiser: z.string(),
  address: addressSchema,
  password: z.string().nonempty(),
  confirmPassword: z.string().nonempty(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
// });
