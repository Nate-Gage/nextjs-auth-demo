function cookieCheck(req, res) {

    const cookieVal = req.headers.cookie;
    const userToken = cookieVal.replace('userToken=', '');

    try {
        res.status(200).send(`User token, from cookie: ${userToken}`);
    } catch (err) {
        res.status(500).send(`Could not grab token. Error: ${err}`);
    }
};

module.exports = {
    cookieCheck
}