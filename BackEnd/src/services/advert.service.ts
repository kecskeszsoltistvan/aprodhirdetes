import { AppDataSource } from "../data-source";
import { Advertisement } from "../entity/Advertisement";

exports.createAd = async (title, description, price, image, category, user, date) => {
    console.log("Attempting to create the ad...")
    let ad = new Advertisement()
    ad.title = title;
    ad.description = description;
    ad.price = price;
    ad.image = image;
    ad.category = category;
    ad.user = user;
    ad.date = date

    await AppDataSource.manager.save(ad);
    console.log(`Advert created in database.`)
}