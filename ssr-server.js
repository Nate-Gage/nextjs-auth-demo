const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.use(cors());

        const routes = require('./src/api/routes.js');
        server.use("/api", routes);

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log(`> * Listening on PORT ${port} *`);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });