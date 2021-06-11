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
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},
                         ${this.countryKey}&appid=${this.apiKey}&units=metric`;    //le paso el parametro metric para que me lo convierta a medidas para utilizar
            const response = await fetch(url);
            const data = await response.json(); 
            return data;
        } catch(e){
            console.error(e);
        }

    }
    changeLocation(city,countryCode)
    {
       this.city = city;
       this.countryCode = countryCode; 
    }


}

export default Weather;