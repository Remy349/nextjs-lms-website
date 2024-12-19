import { formatDate } from "@/lib/utils";
import { IGetCategoriesDataTableUseCase } from "@/src/application/use-cases/category/get-categories-data-table.use-case";
import { Category } from "@/src/entities/models/category.model";

const presenter = (categoriesDataTable: Category[]) => {
  return categoriesDataTable.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: formatDate(item.createdAt),
  }));
};

export type IGetCategoriesDataTableController = ReturnType<
  typeof getCategoriesDataTableController
>;

export const getCategoriesDataTableController =
  (getCategoriesDataTableUseCase: IGetCategoriesDataTableUseCase) =>
  async (): Promise<ReturnType<typeof presenter>> => {
    const categoriesDataTable = await getCategoriesDataTableUseCase();

    return presenter(categoriesDataTable);
  };
