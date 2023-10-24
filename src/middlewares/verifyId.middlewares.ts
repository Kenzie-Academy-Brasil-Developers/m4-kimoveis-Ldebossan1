import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyId = async( req: Request, res: Response, next: NextFunction): Promise<void> => {
    const foundUser: User | null = await userRepo.findOne({where:{id: Number(req.params.id)}})
    
    if(!foundUser){
        throw new AppError('User not found.', 404)
    }

    res.locals = {...res.locals, foundUser}

    return next()
}