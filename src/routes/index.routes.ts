import { Router } from "express";
import { userRoutes } from "./user.routes";

export const routes: Router = Router()

routes.use('/users', userRoutes)