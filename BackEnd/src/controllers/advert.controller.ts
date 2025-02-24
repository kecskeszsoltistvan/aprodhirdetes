const advertService = require('../services/advert.service');
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const add = async (req, res, next) => {

    try {
            const {title, description, price, image, category, userID, date} = JSON.parse(req.body.fos);
            if (!title || !description || !price || !image || !category || !userID || !date) {
                return res.status(203).json({ message: `Missing data! (${JSON.stringify(req.body.fos)})`});

            }
            const user = await AppDataSource.manager.findOneBy(User, {id: userID})
            console.log(`${user}: ${userID}`)
            const ad = await advertService.createAd(title, description, price, req.file.filename, category, user, date)
            console.log('Advert passed the controller check...')

        next();
    }
    catch(error){
        next(error);
    }
}