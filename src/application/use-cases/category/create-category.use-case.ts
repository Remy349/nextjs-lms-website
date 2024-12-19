import { CreateDTO } from "@/src/entities/models/category.model";
import { ICategoryRepository } from "../../repositories/category.repository.interface";
import { DBConflictError } from "@/src/entities/errors/database.error";

export type ICreateCategoryUseCase = ReturnType<typeof createCategoryUseCase>;

export const createCategoryUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (data: CreateDTO): Promise<void> => {
    const categoryByName = await categoryRepository.getCategoryByName(
      data.name,
    );

    if (categoryByName) {
      throw new DBConflictError("Categoria ya creada");
    }

    return await categoryRepository.createCategory(data);
  };
