type Role = "STUDENT" | "TEACHER" | "ADMIN";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
};
