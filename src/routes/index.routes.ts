import { Router } from "express";
import { userRouter } from "./user.routes";
import { scheduleRouter } from "./schedules.routes";
import { categoryRouter } from "./category.routes";
import { realEstateRouter } from "./realEstate.routes";
import { sessionRouter } from "./session.routes";

export const routes: Router = Router()

routes.use('/users', userRouter)
routes.use('/login', sessionRouter)
routes.use('/schedules', scheduleRouter)
routes.use('/categories', categoryRouter)
routes.use('/realEstate', realEstateRouter)
