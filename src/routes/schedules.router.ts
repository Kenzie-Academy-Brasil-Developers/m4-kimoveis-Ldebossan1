import { Router } from "express";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists } from "../middlewares/schedules.middlewares";

export const scheduleRouter: Router = Router();

scheduleRouter.post("/",
  verifyToken,
  validadeBody,
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists
);
scheduleRouter.get("/realEstate/:id", verifyToken, verifyAdmin);
