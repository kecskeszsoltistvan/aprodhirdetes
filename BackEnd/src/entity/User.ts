import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 16})
    name: string

    @Column({length: 64})
    email: string

    @Column({length: 64})
    password: string

}
 