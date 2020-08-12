const express = require('express');
const router = express.Router();


const signIn = require('./signin');
router.post('/signin', (req, res) => {
    console.log('----' + req.body)
    signIn.signIn(req, res)
});

module.exports = router;