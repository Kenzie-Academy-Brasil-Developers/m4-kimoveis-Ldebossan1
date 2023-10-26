import { Repository } from "typeorm";
import User from "./entities/user.entities";
import { AppDataSource } from "./data-source";
import { Address, Category, Schedule, realEstate } from "./entities";

export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
export const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
export const realEstateRepo: Repository<realEstate> = AppDataSource.getRepository(realEstate)
export const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)