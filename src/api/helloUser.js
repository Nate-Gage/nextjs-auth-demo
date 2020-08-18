const helloUser = (req, res) => {
    
    try {
        res.status(200).send({
            user: req.headers.user,
            greeting: `hello, your email is: ${req.headers.user.email}`
        });
    } catch (err) {
        res.status(500).send();
    }
};

module.exports = {
    helloUser
}