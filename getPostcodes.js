const fetch = require('node-fetch');


async function getPostcodes() {
    let response = await fetch('https://raw.githubusercontent.com/theikkila/postinumerot/master/postcode_map_light.json');
    let postcodes = await response.json();
    return postcodes;
}

getPostcodes();

module.exports = { getPostcodes };