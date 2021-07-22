let weather = {
    "apiKey" : "c930dbb5749bf003a6893525d06be1d4",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
          )
    .then((response) => response.json())
    .then((data) => console.log(data));
    


    },


    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =   "https://openweathermap.org/img/wn/" + icon + ".png";




    }

};