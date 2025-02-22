const advertService = require('../services/advert.service');

export const add = async (require, resolve, next) => {
    try {
        return resolve.status(501).json({message: "Még nincs ilyen"})
    }
    catch(error){
        next(error);
    }
}