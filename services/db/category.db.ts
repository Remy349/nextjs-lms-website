import { getInjection } from "@/di/container";

export const getCategoriesDataTable = async () => {
  const getCategoriesDataTableController = getInjection(
    "category",
    "IGetCategoriesDataTableController",
  );

  return await getCategoriesDataTableController();
};
