const jwt = require('jsonwebtoken');

function signIn(req, res) {

    const token = jwt.sign({
        email: req.body.email
    }, process.env.JWT_KEY, { expiresIn: '1h' })

    try {
        res.cookie('userToken', token);
        res.status(200).send({
            "user": {
                "email": req.body.email,
                "error": "",
                "status": 200,
                "UserName": "Gage, Nate",
                "NUID": "T16573"
            }
        })
    } catch (err) {
        res.status(!200).send({ "error": "There was an error signing in" });
        console.log(err);
    }
}

module.exports = {
    signIn
}
