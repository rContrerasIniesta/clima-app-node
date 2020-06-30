const axios = require('axios');

const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e411d08ad5709103542bf08bac2d2e38&units=metric`);

    return resp.data.temp;
}

module.exports = {
    getClima
}