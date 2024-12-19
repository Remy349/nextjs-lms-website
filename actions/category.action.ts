"use server";

import { getInjection } from "@/di/container";
import { TCreateFormSchema } from "@/schemas/category.schema";
import { DatabaseError } from "@/src/entities/errors/database.error";
import { revalidatePath } from "next/cache";

export const createCategoryAction = async (formData: TCreateFormSchema) => {
  try {
    const createCategoryController = getInjection(
      "category",
      "ICreateCategoryController",
    );

    await createCategoryController(formData);
  } catch (err) {
    if (err instanceof DatabaseError) {
      return { error: err.message };
    }
  }

  revalidatePath("/dashboard/categorias");

  return { success: true };
};
