import { Category } from "./category";
export interface Advert {
    id: string,
    userID: string,
    date: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: Category,
}