import * as z from "zod";

export const AnnouncementSchema = z.object({
  brand: z.string().max(20, "Insira uma marca válida").nonempty(),
  model: z.string().max(127).nonempty("O modelo é obrigatório"),
  year: z.string().length(4).nonempty("O ano é obrigatório"),
  fuel: z.number().max(3).min(1, "O combustível é obrigatório"),
  kilometers: z.number().min(1, "A quilometragem é obrigatório").max(999999),
  color: z.string().max(20).nonempty("O cor é obrigatória"),
  price_fipe: z.number().min(1, "O preço da tabela FIPE é obrigatória"),
  price: z.number().min(1, "O preço é obrigatório"),
  description: z.string(),
  cover_image: z.string().nonempty("A imagem de capa é obrigatória"),
  image_gallery: z.array(z.object({ image: z.string() })),
});
