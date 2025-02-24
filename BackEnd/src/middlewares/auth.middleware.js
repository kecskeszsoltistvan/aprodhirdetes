const jwt = require('jsonwebtoken');
require('dotenv').config()


const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Hozzáférés megtagadva. Token hiányzik.',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT); 
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
