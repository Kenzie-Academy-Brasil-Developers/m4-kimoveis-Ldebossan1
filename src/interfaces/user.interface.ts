import { z } from "zod";
import { UserCreateSchema, UserReadSchema, UserSchema, UserUpdateSchema } from "../schemas/user.schema";

export type iUser = z.infer<typeof UserSchema>
export type UserCreate = z.infer<typeof UserCreateSchema>
export type UserRead = z.infer<typeof UserReadSchema>
export type UserUpdate = z.infer<typeof UserUpdateSchema>