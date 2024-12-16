import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { IIsAdminCreatedUseCase } from "@/src/application/use-cases/user/is-admin-created.use-case";
import { IIsAdminCreatedController } from "@/src/interface-adapters/controllers/user/is-admin-created.controller";

export const DI_USER_SYMBOLS = {
  // REPOSITORY
  IUserRepository: Symbol.for("IUserRepository"),
  // USE CASES
  IIsAdminCreatedUseCase: Symbol.for("IIsAdminCreatedUseCase"),
  // CONTROLLERS
  IIsAdminCreatedController: Symbol.for("IIsAdminCreatedController"),
};

export type DI_USER_RETURN_TYPES = {
  // REPOSITORY
  IUserRepository: IUserRepository;
  // USE CASES
  IIsAdminCreatedUseCase: IIsAdminCreatedUseCase;
  // CONTROLLERS
  IIsAdminCreatedController: IIsAdminCreatedController;
};
