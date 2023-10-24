import { Router } from "express";
import { userCreateController, userDeleteController, userReadController, userUpdateController } from "../controllers/user.controller";
import { validadeBody } from "../middlewares/validateBody.middleware";
import { UserCreateSchema, UserUpdateSchema } from "../schemas/user.schema";
import { verifyId } from "../middlewares/verifyId.middlewares";

export const userRoutes: Router = Router()

userRoutes.post('/',validadeBody(UserCreateSchema), userCreateController)
userRoutes.get('/', userReadController)

userRoutes.use('/:id', verifyId)

userRoutes.patch('/:id', validadeBody(UserUpdateSchema), userUpdateController)
userRoutes.delete('/:id', userDeleteController)