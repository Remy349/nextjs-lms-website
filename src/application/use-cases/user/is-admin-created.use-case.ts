import { IUserRepository } from "../../repositories/user.repository.interface";

export type IIsAdminCreatedUseCase = ReturnType<typeof isAdminCreatedUseCase>;

export const isAdminCreatedUseCase =
  (userRepository: IUserRepository) => async (): Promise<boolean> => {
    return await userRepository.isAdminCreated();
  };
