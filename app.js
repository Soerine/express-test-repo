const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
    res.json({
        Navn: "Per",
        Efternavn: "Hansen",
        By: "Valby",
        Alder: "14 år"
    });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});
