const helloWorld = (req, res) => {
    
    try {
        res.status(200).send({
            user: req.headers.user,
            greeting: `hello ${req.headers.user.UserName}`
        });
    } catch (err) {
        res.status(500).send();
    }
};

module.exports = {
    helloWorld
}