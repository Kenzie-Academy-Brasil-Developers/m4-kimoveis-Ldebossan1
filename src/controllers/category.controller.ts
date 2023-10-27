import { Request, Response } from "express";
import { createCategoryService, readCategoryService, readEstateByCategoryService } from "../services/category.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category = await createCategoryService(req.body)

    return res.status(201).json(category)
}

export const ReadCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category = await readCategoryService()

    return res.status(200).json(category)
}

export const readEstateByCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const Estates = await readEstateByCategoryService(Number(id))

    return res.status(200).json(Estates)
}