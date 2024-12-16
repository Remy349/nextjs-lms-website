import { getInjection } from "@/di/container";

export const isAdminCreatedDB = async () => {
  const isAdminCreatedController = getInjection(
    "user",
    "IIsAdminCreatedController",
  );

  return await isAdminCreatedController();
};
