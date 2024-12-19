import { ICategoryRepository } from "@/src/application/repositories/category.repository.interface";
import { ICreateCategoryUseCase } from "@/src/application/use-cases/category/create-category.use-case";
import { IGetCategoriesDataTableUseCase } from "@/src/application/use-cases/category/get-categories-data-table.use-case";
import { ICreateCategoryController } from "@/src/interface-adapters/controllers/category/create-category.controller";
import { IGetCategoriesDataTableController } from "@/src/interface-adapters/controllers/category/get-categories-data-table.controller";

export const DI_CATEGORY_SYMBOLS = {
  // REPOSITORY
  ICategoryRepository: Symbol.for("ICategoryRepository"),
  // USE CASES
  ICreateCategoryUseCase: Symbol.for("ICreateCategoryUseCase"),
  IGetCategoriesDataTableUseCase: Symbol.for("IGetCategoriesDataTableUseCase"),
  // CONTROLLERS
  ICreateCategoryController: Symbol.for("ICreateCategoryController"),
  IGetCategoriesDataTableController: Symbol.for(
    "IGetCategoriesDataTableController",
  ),
};

export type DI_CATEGORY_RETURN_TYPES = {
  // REPOSITORY
  ICategoryRepository: ICategoryRepository;
  // USE CASES
  ICreateCategoryUseCase: ICreateCategoryUseCase;
  IGetCategoriesDataTableUseCase: IGetCategoriesDataTableUseCase;
  // CONTROLLERS
  ICreateCategoryController: ICreateCategoryController;
  IGetCategoriesDataTableController: IGetCategoriesDataTableController;
};
