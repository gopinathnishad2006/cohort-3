//pelhe date fir eaether
const apiKey = "YOUR_API_KEY"; 

function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    const day = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    const date = now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").innerText = time;
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
}


updateDateTime();

setInterval(updateDateTime, 1000);


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeather, locationError);
} else {
    alert("Your browser does not support Geolocation.");
}

function fetchWeather(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherURL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(weatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            // City
            document.getElementById("city").innerText = data.name;

            // Temperature
            document.getElementById("temp").innerText =
                Math.round(data.main.temp) + "°C";

            // Weather Condition
            document.getElementById("condition").innerText =
                data.weather[0].main;

            // Humidity
            document.getElementById("humidity").innerText =
                "Humidity : " + data.main.humidity + "%";

            // Wind Speed
            document.getElementById("wind").innerText =
                "Wind : " + data.wind.speed + " m/s";

            // Weather Icon
            const icon =
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("icon").src = icon;

        })
        .catch(function (error) {
            console.log(error);
            alert("Unable to fetch weather data.");
        });
}



function locationError(error) {

    if (error.code === 1) {
        alert("Location permission denied.");
    }

    else if (error.code === 2) {
        alert("Location unavailable.");
    }

    else if (error.code === 3) {
        alert("Location request timed out.");
    }

    else {
        alert("Something went wrong.");
    }
}

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.innerText = "☀️ Light Mode";
    }else{
        btn.innerText = "🌙 Dark Mode";
    }

});

const pomodorotimerpage = document.querySelector(".pomodorotimerpage");
const pomodorotimer = document.querySelector(".pomodorotimer");
const dashboard = document.querySelector("#dashboard");

pomodorotimer.addEventListener("click", () => {
    pomodorotimerpage.style.display = "block";
    dashboard.style.display = "none";
});

let minute = 25;
let second = 0;
let timer = null;

const tame = document.querySelector("#tame");

function updateTime() {
    tame.innerText = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
}

updateTime();

// Start
document.querySelector("#start").addEventListener("click", () => {
    if (timer) return; // Prevent multiple intervals

    timer = setInterval(() => {
        if (second === 0) {
            if (minute === 0) {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
                return;
            }
            minute--;
            second = 59;
        } else {
            second--;
        }

        updateTime();
    }, 1000);
});

// Pause
document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

// Reset
document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    minute = 25;
    second = 0;
    updateTime();
});


