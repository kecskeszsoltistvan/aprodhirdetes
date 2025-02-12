const userService = require('../services/user.service');

export const register = async (req, res, next) => {  
    try{

        let invalidFields = [];

        const { name, email, password, confirm } = req.body;
        if ( !name || !email || !password || !confirm ){

            if (!name){
                invalidFields.push('name');
            }
            if (!email){
                invalidFields.push('email');
            }
            if (!password){
                invalidFields.push('password');
            }
            if (!confirm){
                invalidFields.push('confirm');
            }

            return res.status(203).json({ message: 'Hiányzó adatok!', invalid: invalidFields });
        }
        if (password != confirm){
            invalidFields.push('password');
            invalidFields.push('confirm');
            return res.status(203).json({message: 'A két jelszó nem egyezik'})
        }
        if ((await userService.IsEmailUsed(email)).length > 0){
            invalidFields.push('email');
            return res.status(203).json({message: 'Az E-mail már regisztrálva van!'})
        }

        const user = await userService.registerUser(name, email, password);

        res.status(201).json({ message: "Sikeres regisztráció" });

    }
    catch(error){
        next(error);
    }
}


/*
exports.login = async (req, res, next) => {
    try{
        let invalidFields = [];
        const { email, password } = req.body;
        if (!email || !password){
            if (!email){
                invalidFields.push('email');
            }
            if (!password){
                invalidFields.push('password');
            }
            return res.status(203).json({ message: 'Hiányzó adatok!'});
        }
        const token = await userService.loginUser(email, password);
        res.status(200).json({ message: "Sikeres bejelentkezés!", token: Object.values(token)[0], success: true });
    }catch(error){
        next(error);
    }
}

exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json({success:true, results: users});
    }catch(error){
        next(error);
    }
}
*/