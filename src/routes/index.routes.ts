import { Router } from "express";
import { userRouter } from "./user.routes";
import { scheduleRouter } from "./schedules.router";
import { categoryRouter } from "./category.router";
import { realEstateRouter } from "./realEstate.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('/login', sessionRouter)
routes.use('/schedules',scheduleRouter)
routes.use('/categories', categoryRouter)
routes.use('/realEstate', realEstateRouter)
