module.exports = (err, req, res, next) => {
    
    console.error('Hiba történt: ', err);

    const status = err.status || 500; 
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        success: false,
        message
    });
};
