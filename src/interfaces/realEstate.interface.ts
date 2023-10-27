import { z } from "zod";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { Repository } from "typeorm";
import RealEstate from "../entities/realEstates.entities";
import Address from "../entities/addresses.entities";


export type CreateRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>