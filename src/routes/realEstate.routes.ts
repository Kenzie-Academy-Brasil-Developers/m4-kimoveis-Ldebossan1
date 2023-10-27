import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyAddressExists } from "../middlewares/realEstates.middlewares";
import { createRealEstateController, readAllEstatesController } from "../controllers/realEstate.controller";
import { createRealEstateSchema } from "../schemas/realEstate.schema";

export const realEstateRouter: Router = Router()

realEstateRouter.post('/', verifyToken, verifyAdmin, validadeBody(createRealEstateSchema), verifyAddressExists, createRealEstateController)
realEstateRouter.get('/', readAllEstatesController)