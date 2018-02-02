const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev')); //Sender besked tilbage til terminalen, hvis nogen benytter min localhost. Den giver også besked om fejl, hvis der bliver skrevet forkert i browseren.

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
    res.json({
        Navn: "Per",
        Efternavn: "Hansen",
        By: "Valby",
        Alder: "14 år"
    });
});

app.get('/api/test/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ param: req.params.id });
});

app.post('/api/formular', (req, res) => {
    res.json({
        besked: "data blev modtaget",
        fornavn: req.body.fornavn,
        efternavn: req.body.efternavn
    });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});
