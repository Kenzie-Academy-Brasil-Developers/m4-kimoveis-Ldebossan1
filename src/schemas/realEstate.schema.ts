import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.string().or(z.number()).default(0),
    size: z.number().positive().int(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive().int(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().int().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    sold: true
}) 