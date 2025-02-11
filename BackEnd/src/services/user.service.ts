import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');


exports.registerUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User()
    user.name = name;
    user.email = email;
    user.password = hashedPassword;

    await AppDataSource.manager.save(user);
    console.log(`User registered: ${user.name} (${user.email}) <${user.password}>`)
    return user;
}
exports.IsEmailUsed = async (email) => {
    return await AppDataSource.manager.findOneBy(User, {email: email});
}
/*
exports.loginUser = async (email, password) => {
    const user = await userMod.findOne({where: { email }});
    if (!user) throw new Error('Nem regisztrált felhasználó!');
    if (!await bcrypt.compare(password, user.password)) throw new Error('Hibás jelszó!');

    const token = generateToken({ id: user.id, name: user.name, email: user.email});
    return { token }; 
}

exports.getAllUsers = async () => {
    return await userMod.findAll({
        attributes: {exclude: ['password']}
    });
}


*/