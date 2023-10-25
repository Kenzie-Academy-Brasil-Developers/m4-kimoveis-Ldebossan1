import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import realEstate from "./realEstates.entities";

@Entity('addresses')
export default class Address{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 45})
    street: string

    @Column({length: 8})
    zipCode: string

    @Column()
    number: number

    @Column({length: 20})
    city: string

    @Column({length: 2})
    state: string

    @OneToOne(() => realEstate, (realEstate) => realEstate.address)
    realEstate: realEstate
}