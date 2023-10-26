import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueUserEmail } from "../middlewares/users.middlewares";
import { verifyCategoryExists, verifyCategoryName } from "../middlewares/categories.middlewares";

export const categoryRouter: Router = Router()

categoryRouter.post('/',
 verifyToken,
 verifyCategoryName,
 verifyAdmin,

)
categoryRouter.get('/',)
categoryRouter.get(':id/realEstate',
 verifyCategoryExists,
 
)