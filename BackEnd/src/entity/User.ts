import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Advertisement } from "./Advertisement"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 16})
    name: string

    @Column({length: 64, unique: true})
    email: string

    @Column({length: 64})
    password: string

    @OneToMany(() => Advertisement, (advertisement) => advertisement.user)
    advertisements: Advertisement[];
}