const checkCookie = (req, res) => {
    
    try {
        const cookieVal = req.headers.cookie;
        const userToken = cookieVal.replace('userToken=', '');

        res.status(200).send(`userToken is ${userToken}`)
    } catch (err) {
        res.status(500).send();
    }
};

module.exports = {
    checkCookie
}