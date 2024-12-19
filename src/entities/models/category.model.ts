export type Category = {
  id: string;
  name: string;
  createdAt: Date;
};

export type CreateDTO = Pick<Category, "name">;
