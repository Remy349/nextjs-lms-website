import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { CategoryRepositoryImpl } from "@/src/infrastructure/repositories/category.repository";
import { createCategoryUseCase } from "@/src/application/use-cases/category/create-category.use-case";
import { createCategoryController } from "@/src/interface-adapters/controllers/category/create-category.controller";
import { getCategoriesDataTableUseCase } from "@/src/application/use-cases/category/get-categories-data-table.use-case";
import { getCategoriesDataTableController } from "@/src/interface-adapters/controllers/category/get-categories-data-table.controller";

export const createCategoryModule = () => {
  const categoryModule = createModule();

  // REPOSITORY
  categoryModule
    .bind(DI_SYMBOLS.category.ICategoryRepository)
    .toClass(CategoryRepositoryImpl);

  // USE CASES
  categoryModule
    .bind(DI_SYMBOLS.category.ICreateCategoryUseCase)
    .toHigherOrderFunction(createCategoryUseCase, [
      DI_SYMBOLS.category.ICategoryRepository,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.category.IGetCategoriesDataTableUseCase)
    .toHigherOrderFunction(getCategoriesDataTableUseCase, [
      DI_SYMBOLS.category.ICategoryRepository,
    ]);

  // CONTROLLERS
  categoryModule
    .bind(DI_SYMBOLS.category.ICreateCategoryController)
    .toHigherOrderFunction(createCategoryController, [
      DI_SYMBOLS.category.ICreateCategoryUseCase,
    ]);
  categoryModule
    .bind(DI_SYMBOLS.category.IGetCategoriesDataTableController)
    .toHigherOrderFunction(getCategoriesDataTableController, [
      DI_SYMBOLS.category.IGetCategoriesDataTableUseCase,
    ]);

  return categoryModule;
};
