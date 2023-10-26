import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyAddressExists } from "../middlewares/realEstates.middlewares";

export const realEstateRouter: Router = Router()

realEstateRouter.post('/',
 verifyToken,
 verifyAdmin,
 validadeBody,
 verifyAddressExists,
 
)
realEstateRouter.get('/', )