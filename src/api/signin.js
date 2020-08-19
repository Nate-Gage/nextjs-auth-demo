const jwt = require('jsonwebtoken');

function signIn(req, res) {

    const user = {
        "email": req.body.email,
        "error": "",
        "status": 200,
        "UserName": "Doe, Jane",
    }

    const token = jwt.sign({
        user: user
    }, process.env.JWT_KEY, { expiresIn: '12h' })

    try {
        res.cookie('userToken', token, { httpOnly: true });
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ "error": "There was an error signing in" });
        console.log(err);
    }
}

module.exports = {
    signIn
}