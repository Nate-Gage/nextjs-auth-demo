const jwt = require('jsonwebtoken');

function signIn(req, res) {

    const user = {
        "email": req.body.email,
        "error": "",
        "status": 200,
        "UserName": "Gage, Nate",
        "NUID": "T16573"
    }

    // creates JWT token
    const token = jwt.sign({
        user: user
    }, process.env.JWT_KEY, { expiresIn: '12h' })

    // Sets the jwt token as a cookie called 'userToken' in the response
    // and sends back the user object.
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

