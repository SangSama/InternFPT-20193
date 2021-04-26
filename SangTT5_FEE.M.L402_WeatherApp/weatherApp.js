$(document).ready(function () {
    var form = $("#form");
    var input = $("#form-input");
    var currentDate = $("#current-date");
    const WEATHER_API_KEY = "6c186bd312fb6c44839158e1da4c8d1e";
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

    // for render
    function renderWeather(weather) {
        console.log(weather.weather);
        const {
            icon,
            description
        } = weather.weather[0];
        const {
            temp,
            humidity,
            pressure
        } = weather.main;
        const {
            name
        } = weather;

        $("#weather-detail").html(`
        <div>City: ${name}</div>
        <p class="text-capitalize">Weather: ${description}</p>
        <hr/>
        <div class="weather-detail-container">
            <div class="toggle-units">
                <img class="img-lg" src="http://openweathermap.org/img/w/${icon}.png" />
                <span class="text-lg">${temp} ºC</span>
            </div>
            <div class="item">
                <p>Humidity: ${humidity} %</p>
                <p>Pressure: ${pressure} hPa</p>
            </div>
        </div>
        `);
    // $("#weather-detail").show();
    }
    //for render date
    function paddingLeft(n) {
        return n < 10 ? `0${n}` : n;
    }
    function getCurrentDate() {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const now = new Date();

        return `${days[now.getDay()]} 
        ${months[now.getMonth()]} ${now.getDate()},
        ${paddingLeft(now.getHours())}:${paddingLeft(now.getMinutes())}`;
    }
    function ipLookUp() {
        setTimeout(function() {
            $.ajax("http://ip-api.com/json").then(function success(response) {
                $("#loading-location").hide();
                $("#loading-weather").hide();

                console.log(response);

                const { city, country } = response;

                $('#current-date').html(getCurrentDate());

                fetchWeather({ city: city.replace(/\s+/g, ""), country }).then(renderWeather);
            });
        }, 3000);
    }

    function fetchWeather({
        city = "Hanoi",
        country = "Vietnam",
        units = "metric"
    }) {
        return $.ajax(`${WEATHER_API_URL}&q=${city},${country}&units=${units}`);
    }

    //renderWeather();
    ipLookUp();

    form.on("submit", function (event) {
        event.preventDefault();
        console.log("test", input.val());
        fetchWeather({ city: input.val().replace(/\s+/g, "") }).then(renderWeather);
    });

});