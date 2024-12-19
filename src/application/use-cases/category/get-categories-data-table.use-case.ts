import { Category } from "@/src/entities/models/category.model";
import { ICategoryRepository } from "../../repositories/category.repository.interface";

export type IGetCategoriesDataTableUseCase = ReturnType<
  typeof getCategoriesDataTableUseCase
>;

export const getCategoriesDataTableUseCase =
  (categoryRepository: ICategoryRepository) =>
  async (): Promise<Category[]> => {
    return await categoryRepository.getCategoriesDataTable();
  };
