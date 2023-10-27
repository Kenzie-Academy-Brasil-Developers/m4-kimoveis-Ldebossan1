import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @DeleteDateColumn({ type: 'date' })
  deletedAt: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password)

    if (!hasRounds) {
      this.password = hashSync(this.password, 10)
    }
  }
}
