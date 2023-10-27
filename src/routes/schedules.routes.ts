import { Router } from "express";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists } from "../middlewares/schedules.middlewares";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import { createScheduleController, readAllSchedulesEstateController } from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router();

scheduleRouter.post("/", verifyToken, validadeBody(createNewScheduleSchema), verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists, createScheduleController);
scheduleRouter.get("/realEstate/:id", verifyToken, verifyAdmin, readAllSchedulesEstateController);
