const express = require('express');
const { getPostcodes } = require('./getPostcodes');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
})


app.get('/postcodes', async function (req, res) {
    let postcodes = await getPostcodes();
    res.json(postcodes);
})

//TASK 1
app.get('/postitoimipaikka/:numero(\\d+)', async function (req, res) {
    let zipcode = req.params.numero;
    let postcodes = await getPostcodes();
    let place = postcodes[zipcode];
    res.json(place || null);
})

//TASK 2
app.get('/zipcodes/:city', async function (req, res) {
    let city = req.params.city;
    city = city.toUpperCase();
    let postcodes = await getPostcodes();
    let zips = [];
    for (zipcode in postcodes) {
        if (postcodes[zipcode] === city) {
            zips.push(zipcode);
        }
    }

    let returnableJson = {
        "toimipaikka": city.toLowerCase(),
        "postinumerot": zips
    }

    res.json(returnableJson);
})


app.listen(PORT, () => console.log(`Server running in the port ${PORT}`));