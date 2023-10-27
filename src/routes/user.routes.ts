import { Router } from "express";
import { userCreateController, userDeleteController, userReadController, userUpdateController } from "../controllers/user.controller";

import { verifyUniqueUserEmail, verifyUserId } from "../middlewares/users.middlewares";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";


export const userRouter: Router = Router()

userRouter.post('/', validadeBody(createUserSchema), verifyUniqueUserEmail, userCreateController)
userRouter.get('/', verifyToken, verifyAdmin, userReadController)

userRouter.use('/:id', verifyUserId)

userRouter.patch('/:id', validadeBody(updateUserSchema), verifyToken, verifyPermissions, userUpdateController)
userRouter.delete('/:id', verifyToken, verifyPermissions, userDeleteController)