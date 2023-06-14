import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().nonempty('Campo obrigatório').email('Insira um e-mail válido').max(254, 'O máximo de character é de 254'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type iLogin = z.infer<typeof LoginSchema>