import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export const UserCreateSchema = UserSchema.omit({id: true, createdAt: true, updatedAt: true})
export const UserReadSchema = UserSchema.array()
export const UserUpdateSchema = UserCreateSchema.partial()