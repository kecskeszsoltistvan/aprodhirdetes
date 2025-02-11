import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum AdvertCat{
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

    @Column("int")
    userID: number
    
    @Column()
    date: Date

    @Column({type: "enum", enum: AdvertCat, default: AdvertCat.COK})
    category: AdvertCat

    @Column({length: 24})
    title: string

    @Column()
    description: string

    @Column({type: "int", width: 9})
    price: number

    @Column()
    image: string
}
