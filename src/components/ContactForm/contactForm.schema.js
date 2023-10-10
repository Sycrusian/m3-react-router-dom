import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "O nome é obrigatório"),
  email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
  sector: z.string().min(1, "O setor é obrigatório."),
  message: z.string().min(8, "A mensagem é obrigatória.")
});