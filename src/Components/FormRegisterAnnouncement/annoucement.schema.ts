import * as z from "zod";

export const AnnoucementSchema = z.object({
  name_car: z
    .string()
    .max(20, "Insira uma marca válida")
    .nonempty("O modelo é obrigatório"),
  brand: z.string().max(20, "Insina uma marca válida").nonempty(),
  model: z.string().nonempty("O modelo é obrigatório"),
  year: z.string().max(4).nonempty("O ano é obrigatório"),
  fuel: z.string().nonempty("O combustível é obrigatório"),
  kilometers: z.string().nonempty("A quilometragem é obrigatório"),
  color: z.string().max(20).nonempty("O cor é obrigatória"),
  price_fipe: z.string().nonempty("O preço da tabela FIPE é obrigatória"),
  price: z.string().nonempty("O preço é obrigatório"),
  description: z.string(),
  cover_image: z.string().nonempty("A imagem de capa é obrigatória"),
  image_gallery: z.array(z.string()),
});
