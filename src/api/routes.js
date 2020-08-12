const express = require('express');
const router = express.Router();


const signIn = require('./signin');
router.post('/signin', (req, res) => {
    console.log('----' + req.body);
    signIn.signIn(req, res)
});

const cookieCheck = require('./cookieCheck');
router.get('/cookieCheck', (req, res) => {
    console.log('----' + req.body);
    cookieCheck.cookieCheck(req, res)
})

module.exports = router;