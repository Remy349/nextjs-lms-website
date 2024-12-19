import PrismaSingleton from "@/db/prisma";
import { ICategoryRepository } from "@/src/application/repositories/category.repository.interface";
import { DBInternalServerError } from "@/src/entities/errors/database.error";
import { Category, CreateDTO } from "@/src/entities/models/category.model";
import { PrismaClient } from "@prisma/client";

export class CategoryRepositoryImpl implements ICategoryRepository {
  private _db: PrismaClient;

  constructor() {
    this._db = PrismaSingleton.getInstance();
  }

  async getCategoriesDataTable(): Promise<Category[]> {
    try {
      return await this._db.category.findMany();
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while fetching data",
      );
    }
  }

  async getCategoryByName(name: string): Promise<Category | null> {
    try {
      return await this._db.category.findFirst({
        where: { name },
      });
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while fetching data",
      );
    }
  }

  async createCategory(data: CreateDTO): Promise<void> {
    try {
      await this._db.category.create({
        data: {
          name: data.name,
        },
      });
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while creating data",
      );
    }
  }
}
