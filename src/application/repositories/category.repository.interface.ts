import { Category, CreateDTO } from "@/src/entities/models/category.model";

export interface ICategoryRepository {
  getCategoriesDataTable(): Promise<Category[]>;
  getCategoryByName(name: string): Promise<Category | null>;
  createCategory(data: CreateDTO): Promise<void>;
}
