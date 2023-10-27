import { z } from "zod";
import { createUserSchema, userLoginSchema, userReadSchema, userReturnSchema } from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/user.entities";

export type UserCreate = z.infer<typeof createUserSchema>
export type UserReadReturn = UserReturn[]
export type UserBodyUpdate = Omit<UserCreate, 'admin'>
export type UserUpdate = DeepPartial<UserBodyUpdate>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = { token: string }

export type UserRepo = Repository<User>