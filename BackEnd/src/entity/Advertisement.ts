import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

export enum AdvertCategory{
    COK = "Service/Cooking",
    EDU = "Service/Education",
    REF = "Service/Restore&Clean",
    ETC = "Service/Other",
    JSC = "Job/Apply",
    JSJ = "Job/Applying",
    GCL = "Goods/Clothing",
    GHA = "Goods/Household",
    GCO = "Goods/Collectables",
    GGG = "Goods/Gadgets",
}


@Entity()
export class Advertisement {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.advertisements)
    @JoinColumn({ name: 'userID' })
    user: User

    @Column()
    date: Date

    @Column({type: "enum", enum: AdvertCategory, default: AdvertCategory.COK})
    category: AdvertCategory

    @Column({length: 24})
    title: string

    @Column()
    description: string

    @Column({type: "int", width: 9})
    price: number

    @Column()
    image: string
}
