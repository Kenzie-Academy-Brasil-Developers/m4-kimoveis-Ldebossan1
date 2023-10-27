import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entities";
import Address from "./addresses.entities";
import Category from "./categories.entities";

@Entity("realEstates")
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column()
    size: number

    @CreateDateColumn({ type: "date" })
    createdAt: string

    @UpdateDateColumn({ type: "date" })
    updatedAt: string

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category
}