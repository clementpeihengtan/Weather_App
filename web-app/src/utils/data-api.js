import axios from 'axios';
const BASE_URL = "Access-Control-Allow-Origin:http://localhost:28017/weather/data";

export {getWeatherData};

//data is updated and populated to database
function getWeatherData() {
    const url = `${BASE_URL}/find`;
    return axios.get(url).then(response => response.data);
}

//function is called at every 60 second to post data to database
function postWeatherData(data) {
    const url = `${BASE_URL}/find`;
    data.map((data, index) => {
        axios.post(url, {
            id: data['id'],
            time: data['time'],
            temperature: data['temperature'],
            humidity: data['humidity']
        })
        .then(function(response) {
        }).catch(function(error){
            console.log(error);
        });
    });
}