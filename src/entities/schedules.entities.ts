import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entities";
import realEstate from "./realEstates.entities";

@Entity("schedules")
export default class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => User, (user) => user.schedules)
    user: User

    @ManyToOne(()=> realEstate, (realEstate) => realEstate.schedules)
    realEstate: realEstate
}