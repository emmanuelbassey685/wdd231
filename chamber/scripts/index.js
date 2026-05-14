const weatherIcon = document.getElementById("icon");
const temp = document.getElementById("temp");
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=7.39&lon=3.94&units=metric&appid=b3bb668d57aae1e11726f8783c5ee7f8`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=7.39&lon=3.94&units=metric&appid=b3bb668d57aae1e11726f8783c5ee7f8`;

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Fetch error: ", error);
    }
}

function displayData(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    temp.innerHTML =`<b>${data.main.temp}</b>&deg;C`;
    document.getElementById("desc").innerHTML = desc;
    document.getElementById("high").innerHTML = `<b>High</b>: ${data.main.temp_max} &deg;`;
    document.getElementById("low").innerHTML = `<b>Low:</b> ${data.main.temp_min} &deg;`;
    document.getElementById("humidity").innerHTML = `<b>Humidity:</b> ${data.main.humidity}%`;
    document.getElementById("sunrise").innerHTML = `<b>Sunrise:</b> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    document.getElementById("sunset").innerHTML = `<b>Sunset:</b> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
}

async function forecastFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Fetch error: ", error);
    }
}

const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const nextTomorrow = document.getElementById("next-t");

function displayForecast(data) {
    today.innerHTML = `<b>Today:</b> ${data.list[0].main.temp}&deg;C`;
    let date = new Date(data.list[8].dt * 1000);
    let dayIndex = date.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[dayIndex];
    tomorrow.innerHTML = `<b>${dayName}:</b> ${data.list[8].main.temp}&deg;C`;
    let tDate = new Date(data.list[16].dt * 1000);
    let tDayIndex = tDate.getDay();
    let tDayName = days[tDayIndex];
    nextTomorrow.innerHTML = `<b>${tDayName}:</b> ${data.list[16].main.temp}&deg;C`;
}

apiFetch();
forecastFetch()

const hamButton = document.getElementById("hamButton");
const navLinks = document.getElementById("navLinks");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    navLinks.classList.toggle("active");
})