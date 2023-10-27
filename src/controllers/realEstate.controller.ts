import { Request, Response } from "express"
import { createRealEstateService, readEstateService } from "../services/realEstates.service"

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const estate = await createRealEstateService(req.body)

    return res.status(201).json(estate)
}

export const readAllEstatesController = async (req: Request, res: Response): Promise<Response> => {
    const estates = await readEstateService()

    return res.status(200).json(estates)
}