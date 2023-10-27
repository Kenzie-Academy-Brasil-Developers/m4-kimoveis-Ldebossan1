import { UserReadReturn, UserReturn, UserUpdate } from "../interfaces/user.interface";
import { userRepo } from "../repositories";
import { User } from "../entities";
import { userReadSchema, userReturnSchema } from "../schemas/user.schema";

export const CreateUserService = async (data: User): Promise<UserReturn> => {
    const user: User = userRepo.create(data)

    const newUser: User = await userRepo.save(user)

    return userReturnSchema.parse(newUser)
}

export const ReadUserService = async (): Promise<UserReadReturn> => {
    const users: User[] = await userRepo.find()

    return userReadSchema.parse(users)
}

export const UpdateUserService = async (user: User, data: UserUpdate) => {
    const userToBeUpdated: User = await userRepo.create({ ...user, ...data })

    const updatedUser = await userRepo.save(userToBeUpdated)

    return userReturnSchema.parse(updatedUser)
}

export const DeleteUserService = async (user: User) => {
    await userRepo.remove(user)
}