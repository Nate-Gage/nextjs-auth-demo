const jwt = require('jsonwebtoken');

export default function SignIn(req, res) {

    const token = jwt.sign({
        email: req.body.email
    }, process.env.JWT_KEY, { expiresIn: '1h' })

    try {
        res.status(200).send({
            "user": {
                "email": req.body.email,
                "token": token,
                "error": "",
                "status": 200,
                "UserName": "Gage, Nate",
                "NUID": "T16573"
            }
        })
    } catch (err) {
        res.status(500).send({ "error": "There was an error signing in" });
    }
}

