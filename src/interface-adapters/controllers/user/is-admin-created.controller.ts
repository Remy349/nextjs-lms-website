import { IIsAdminCreatedUseCase } from "@/src/application/use-cases/user/is-admin-created.use-case";

export type IIsAdminCreatedController = ReturnType<
  typeof isAdminCreatedController
>;

export const isAdminCreatedController =
  (isAdminCreatedUseCase: IIsAdminCreatedUseCase) =>
  async (): Promise<boolean> => {
    return isAdminCreatedUseCase();
  };
