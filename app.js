const { argv } = require('./config/yargs');
const { getLugarCoordenadas } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

// transforma los parametros para evitar caracteres como espacios


const getInfo = async(direccion) => {

    try {

        const coordenadas = await getLugarCoordenadas(direccion);
        const temp = await getClima(coordenadas.lat, coordenadas.long);
        return `El clima de ${direccion} es de ${temp} grados`;

    } catch (e) {
        throw new Error(`No se puedo obtener el clima de la ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)