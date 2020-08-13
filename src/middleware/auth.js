const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        // Looks for provided header
        const cookieVal = req.header.cookie;
        const token = cookieVal.replace('userToken=', '');
        //Validates user token
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        console.log(decoded.user);

        if (user) {
            next()
        }
a
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
        window.location='/';
    }
}

module.exports = auth;