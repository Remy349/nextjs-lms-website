import { ICreateCategoryUseCase } from "@/src/application/use-cases/category/create-category.use-case";
import { CreateDTO } from "@/src/entities/models/category.model";

export type ICreateCategoryController = ReturnType<
  typeof createCategoryController
>;

export const createCategoryController =
  (createCategoryUseCase: ICreateCategoryUseCase) =>
  async (data: CreateDTO): Promise<void> => {
    await createCategoryUseCase(data);
  };
