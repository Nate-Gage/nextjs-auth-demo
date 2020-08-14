const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const signIn = require('./signin');
router.post('/signin', (req, res) => {
    signIn.signIn(req, res)
});

const helloWorld = require('./helloWorld');
router.get('/helloWorld', auth, (req, res) => {
    helloWorld.helloWorld(req, res);
})

module.exports = router;