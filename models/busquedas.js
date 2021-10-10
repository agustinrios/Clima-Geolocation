const axios = require('axios');

class Busquedas{

    historial = ['mendoza', 'cordoba', 'concepcion del uruguay'];

    constructor(){

    }

    async ciudad(lugar = '') {
        
        try {
            //console.log('ciudad' , lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1IjoiYWd1c3RpbnJpb3MiLCJhIjoiY2t1bHJxaGE4MjJneDJydDRzeWN6eGMwbSJ9.26Z3XSeYqEf0XiHZ_FW0MQ&limit=5&language=es');
            console.log(resp.data);

            return[]

        } catch {
            return[];
        }
    }
}

module.exports = Busquedas;