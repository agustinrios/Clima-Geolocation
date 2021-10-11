const axios = require('axios');

class Busquedas{

    historial = ['mendoza', 'cordoba', 'concepcion del uruguay'];

    constructor(){

    }

    get paramsMapbox() {
        return{
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {
        
        try {
            //peticion HTTP
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1IjoiYWd1c3RpbnJpb3MiLCJhIjoiY2t1bHJxaGE4MjJneDJydDRzeWN6eGMwbSJ9.26Z3XSeYqEf0XiHZ_FW0MQ&limit=5&language=es');
            const resp = await intance.get();
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        } catch {
            return[];
        }
    }
}

module.exports = Busquedas;