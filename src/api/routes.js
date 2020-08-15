const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const signIn = require('./signin');
router.post('/signin', (req, res) => {
    signIn.signIn(req, res)
});

const helloUser = require('./helloUser');
router.get('/helloUser', auth, (req, res) => {
    helloUser.helloUser(req, res);
})

module.exports = router;