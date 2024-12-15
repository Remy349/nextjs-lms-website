export interface IUserRepository {
  isAdminCreated(): Promise<boolean>;
}
