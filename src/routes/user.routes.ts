import { Router } from "express";
import { userCreateController, userDeleteController, userReadController, userUpdateController } from "../controllers/user.controller";
import { UserCreateSchema, UserUpdateSchema } from "../schemas/user.schema";
import { verifyUniqueUserEmail, verifyUserId } from "../middlewares/users.middlewares";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";


export const userRouter: Router = Router()

userRouter.post('/',validadeBody(UserCreateSchema),verifyUniqueUserEmail, userCreateController)
userRouter.get('/', verifyToken, verifyAdmin, userReadController)

userRouter.use('/:id', verifyUserId)

userRouter.patch('/:id', validadeBody(UserUpdateSchema), verifyToken, verifyPermissions, userUpdateController)
userRouter.delete('/:id', verifyToken, verifyPermissions, verifyAdmin, userDeleteController)