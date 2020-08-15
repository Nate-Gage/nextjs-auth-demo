const helloUser = (req, res) => {
    
    try {
        res.status(200).send({
            user: req.headers.user,
            greeting: `hello, your last and first name is: ${req.headers.user.UserName}`
        });
    } catch (err) {
        res.status(500).send();
    }
};

module.exports = {
    helloUser
}