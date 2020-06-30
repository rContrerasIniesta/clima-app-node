const axios = require('axios');


let getLugarCoordenadas = async(direccion) => {
    // transforma los parametros para evitar caracteres como espacios
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?geoit=json`
            // headers: {'X-Custom-Header': 'foobar'}
    });
    const resp = await instance.get();

    const data = resp.data;
    const lat = resp.data.latt;
    const long = resp.data.longt;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarCoordenadas
}