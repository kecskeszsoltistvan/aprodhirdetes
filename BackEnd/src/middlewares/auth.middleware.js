const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Hozzáférés megtagadva. Token hiányzik.',
        });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Érvénytelen vagy lejárt token.',
        });
    }
};

module.exports = authMiddleware;
