import { createContainer } from "@evyweb/ioctopus";
import { createUserModule } from "./modules/user.module";
import { DI_RETURN_TYPES, DI_SYMBOLS } from "./types";
import { createCategoryModule } from "./modules/category.module";

const container = createContainer();

container.load(Symbol("UserModule"), createUserModule());
container.load(Symbol("CategoryModel"), createCategoryModule());

export function getInjection<
  K extends keyof DI_RETURN_TYPES,
  P extends keyof DI_RETURN_TYPES[K],
>(moduleKey: K, symbolKey: P): DI_RETURN_TYPES[K][P] {
  const moduleSymbols = DI_SYMBOLS[moduleKey] as Record<
    keyof DI_RETURN_TYPES[K],
    symbol
  >;

  const symbol = moduleSymbols[symbolKey] as symbol;

  return container.get<DI_RETURN_TYPES[K][P]>(symbol);
}
