import { Repository } from "typeorm";
import User from "./entities/user.entities";
import { AppDataSource } from "./data-source";

export const userRepo: Repository<User> = AppDataSource.getRepository(User)