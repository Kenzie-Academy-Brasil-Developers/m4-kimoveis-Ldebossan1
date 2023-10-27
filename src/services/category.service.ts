import { Category } from "../entities";
import { AppError } from "../errors/AppError.error";
import { createCategory } from "../interfaces/category.interface";
import { categoriesRepo } from "../repositories";

export const createCategoryService = async (data: createCategory): Promise<Category> => {
    return await categoriesRepo.save(data)
}

export const readCategoryService = async (): Promise<Category[]> => {
    return await categoriesRepo.find()
}

export const readEstateByCategoryService = async (id: number): Promise<Category> => {
    const category: Category | null = await categoriesRepo.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    })

    if (!category) {
        throw new AppError('Category not found', 404)
    }

    return category
}