const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Zone Server Running');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const recipe = chefs.find(chef => chef.id === id);
    res.send(recipe);
})

app.listen(port, () => {
    console.log(`Chef Zone Server Running Port ${port}`);
})

