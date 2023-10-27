import { AppDataSource } from "./data-source";
import { CategoryRepo } from "./interfaces/category.interface";
import { UserRepo } from "./interfaces/user.interface";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
import { Address, Category, Schedule, User, RealEstate } from "./entities";

export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const categoriesRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const schedulesRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)