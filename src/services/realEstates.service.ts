import RealEstate from "../entities/realEstates.entities";
import { AppError } from "../errors/AppError.error";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { addressRepo, categoriesRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async (data: CreateRealEstate): Promise<RealEstate> => {
    const category = await categoriesRepo.findOneBy({ id: data.categoryId })

    if (!category) {
        throw new AppError('Category not found', 404)
    }

    const address = await addressRepo.save(data.address)
    const { id } = await realEstateRepo.save({ ...data, address: address, category: category! })
    const estate = await realEstateRepo.findOne({
        where: {
            id: id
        },
        relations: {
            category: true,
            address: true
        }
    })

    return estate!
}

export const readEstateService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    })
}