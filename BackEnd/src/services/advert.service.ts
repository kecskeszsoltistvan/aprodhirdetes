import { AppDataSource } from "../data-source";
import { Advertisement } from "../entity/Advertisement";

exports.createAd = async (title, description, price, image, category) => {
    console.log("Attempting to create the ad...")
    let ad = new Advertisement()
    ad.title = title;
    ad.description = description;
    ad.price = price;
    ad.image = "";
    ad.category = category;

    await AppDataSource.manager.save(ad);
    console.log(`Advert created: `)
}