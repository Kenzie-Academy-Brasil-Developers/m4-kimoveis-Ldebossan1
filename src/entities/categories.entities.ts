import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import realEstate from "./realEstates.entities";

@Entity('categories')
export default class Category{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({length: 45, unique: true})
    name: string

    @OneToMany(() => realEstate, (realEstate) => realEstate.category)
    realEstate: realEstate
}