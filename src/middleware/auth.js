const jwt = require('jsonwebtoken');
const logger = require('../utils/winston');

const auth = async (req, res, next) => {
    try {
        // Looks for provided header
        const authValue = req.headers.authorization;
        const token = authValue.replace('Bearer ', '');
        //Validates user token
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        if (decoded) {
            logger.debug('Token verified for user: ' + decoded.user);
            req.headers.user = decoded.user;
            next()
        }

    } catch (e) {
        logger.error('User token NOT verified');
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth;