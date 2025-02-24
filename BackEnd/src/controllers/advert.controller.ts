const advertService = require('../services/advert.service');
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Advertisement } from "../entity/Advertisement";

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
export const fetch = async (req, res) => {
    console.log(`Fetch called...`);
    console.log(req.body.userID);
    try{
        
        const uid = req.body.userID;
        console.log(`Attempting to fetch data by userID: ${uid}`)
        if (!uid){
            return res.status(406).json({message: `Failed to fetch UID.`})
        }
        const currentUser = await AppDataSource.manager.findBy(User, {id: uid})
        const ads = await AppDataSource.manager.findBy(Advertisement, {user: currentUser})
        return res.status(200).json({userAds: ads});
    }
    catch (error) 
    {
        return res.status(406).json({message: `Failed to fetch user's ads.`});
    }
}
export const fetchAll = async (req, res) => {
    console.log(`FetchAll called...`);
    try{
        const ads = await AppDataSource.manager.find(Advertisement);
        return res.status(200).json({allAds: ads});
    }
    catch (error) 
    {
        return res.status(500).json({message: `Failed to fetch ads: ${error}`});
    }
}