import { Category } from "./category";
export interface Advert {
    id: string,
    userID: string,
    date: string,
    title: string,
    description: string,
    price: number,
    image: any,
    category: Category,
}