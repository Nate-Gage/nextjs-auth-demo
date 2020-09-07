const jwt = require('jsonwebtoken');
const logger = require('../utils/winston');

function signIn(req, res) {

    const user = {
        "email": req.body.email,
        "UserName": "Doe, Jane",
    }

    logger.debug('user created at signIn: ' + user.email)

    const token = jwt.sign({
        user: user
    }, process.env.JWT_KEY, { expiresIn: '12h' })

    try {
        res.cookie('userToken', token, { httpOnly: true });
        logger.debug('cookie created at signIn for: ' + user.email)
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ "error": "There was an error signing in" });
        logger.error("Error occured at signin.js for " + user.email + ": " +  + err)
    }
}

module.exports = {
    signIn
}