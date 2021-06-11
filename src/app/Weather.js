class Weather{
    
    constructor(city, countryCode)
    {
        this.apiKey = '67d6022266b2235d6e6e32a2c89472b4'
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather()
    {
        try{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryKey}&appid=${this.apiKey}`;
            const response = await fetch(url);
            const data = await response.json(); 
            return data;
        } catch(error){
            error.getMessage();
        }


    }

}

export default Weather;