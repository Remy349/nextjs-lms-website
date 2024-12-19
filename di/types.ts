import {
  DI_CATEGORY_RETURN_TYPES,
  DI_CATEGORY_SYMBOLS,
} from "./types/category.type";
import { DI_USER_RETURN_TYPES, DI_USER_SYMBOLS } from "./types/user.type";

export const DI_SYMBOLS = {
  user: DI_USER_SYMBOLS,
  category: DI_CATEGORY_SYMBOLS,
};

export type DI_RETURN_TYPES = {
  user: DI_USER_RETURN_TYPES;
  category: DI_CATEGORY_RETURN_TYPES;
};
