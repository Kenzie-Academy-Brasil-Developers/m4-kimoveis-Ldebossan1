import { hash } from "bcryptjs";
import { UserCreate, UserRead, UserUpdate } from "../interfaces/user.interface";
import { userRepo } from "../repositories";
import { User } from "../entities";

export const CreateUserService = async(data: any) => {
    data.password = await hash(data.password,10)

    const newUser: User = await userRepo.save(data)

    return newUser
}

export const ReadUserService = async (): Promise<UserRead> => {
    const users: UserRead = await userRepo.find()

    return users
}

export const UpdateUserService = async (user: any, data: UserUpdate) => {
    return await userRepo.save({...user, ...data})
}

export const DeleteUserService = async (user: User) => {
    await userRepo.remove(user)
}