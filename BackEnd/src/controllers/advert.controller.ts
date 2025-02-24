const advertService = require('../services/advert.service');
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const add = async (req, res, next) => {

    try {
            console.log(req);
            const {title, description, price, image, category, userID} = JSON.parse(req.body.fos);
            if (!title || !description || !price || !image || !category || !userID) {
                return res.status(203).json({ message: `Missing data! (${JSON.stringify(req.body.fos)})`});

            }
            const user = await AppDataSource.manager.findOneBy(User, {id: userID})
            console.log(`${user}: ${userID}`)
            //const ad = await advertService.createAd(title, description, price, req.file.filename, category, user)
            console.log('Advert passed the controller check...')

        next();
    }
    catch(error){
        next(error);
    }
}