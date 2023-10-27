import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyCategoryExists, verifyCategoryName } from "../middlewares/categories.middlewares";
import { ReadCategoryController, createCategoryController, readEstateByCategoryController } from "../controllers/category.controller";
import { createCategorySchema } from "../schemas/category.schema";

export const categoryRouter: Router = Router()

categoryRouter.post('/', verifyToken, validadeBody(createCategorySchema), verifyCategoryName, verifyAdmin, createCategoryController
)
categoryRouter.get('/', ReadCategoryController)
categoryRouter.get('/:id/realEstate', verifyCategoryExists, readEstateByCategoryController)