import { z } from "zod";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Nombre es requerido")
    .max(20, "La longitud máxima es 20 de caracteres"),
});

export const CreateFormSchema = FormSchema;

export type TCreateFormSchema = z.infer<typeof CreateFormSchema>;
