import { Request, Response } from "express";
import { User } from "../entities";
import { CreateUserService, DeleteUserService, ReadUserService, UpdateUserService } from "../services/user.services";
import { UserRead } from "../interfaces/user.interface";

export const userCreateController = async (req: Request, res: Response): Promise<Response> => {
    const newUser: User = await CreateUserService(req.body)

    return res.status(201).json(newUser)
}

export const userReadController = async (req: Request, res: Response): Promise<Response> => {
    const users: UserRead = await ReadUserService()

    return res.status(200).json(users)
}

export const userUpdateController = async (req: Request, res: Response): Promise<Response> => {
    const foundUser = res.locals.foundUser
    
    const updatedUser = await UpdateUserService(foundUser, req.body)

    return res.status(201).json(updatedUser)
}

export const userDeleteController = async (req: Request, res: Response): Promise<Response> => {
    await DeleteUserService(res.locals.foundUser)

    return res.status(204).json()
}