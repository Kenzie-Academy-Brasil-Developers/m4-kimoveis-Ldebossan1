import { z } from "zod";
import { createCategorySchema, readAllCategorySchema } from "../schemas/category.schema";
import { Repository } from "typeorm";
import Category from "../entities/categories.entities";

export type createCategory = z.infer<typeof createCategorySchema>
export type readAllCategorySchema = z.infer<typeof readAllCategorySchema>

export type CategoryRepo = Repository<Category>