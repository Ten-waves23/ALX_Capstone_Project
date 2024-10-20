const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemEl= document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl= document.getElementById('country');
const weatherForcastEl=document.getElementById('wearther-forcast');
const currentTempEl= document.getElementById('current-temp');


const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];

const API_KEY = '64d0eded80cda0e3c42ee71f9b66f91d';

setInterval(() => {
      const time= new Date();
      const month = time.getMonth();
      const date= time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrsFormat = hour >= 13 ? hour %12: hour
      const minutes = time.getMinutes();
      const ampm = hour >=12 ? 'PM' : 'AM'

      timeEl.innerHTML = hourIn12HrFormat + ' : ' +minutes+ '  ' + `<span id="am-pm">${ampm}</span>` 
      dateEl.innerHTML = days[day] + ', ' + date+ '  ' + months [month]
}, 1000);

getWeatherData ()

function getWeatherData () {
      navigator.geolocation.getCurrentPosition((success) => {
         

            let { latitude, longitude } = success.coords;

            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`) .then(res => res.json()).then(data =>{
                  console.log(data)
                  showWeatherData(data);
            })

      })
}

function showWeatherData (data) {
      let {humidity, pressure, sunrise, sunset, windspeed} = data.current;

 currentWeatherItemEl . innerHTML =
      `  <div class="weather-items">
      <div>Temperature</div>
      <div>${temperature}</div>
</div>
<div class="weather-items">
      <div>Humidity</div>
      <div>${humidity}%</div>
</div>
<div class="weather-items">
      <div>Windspeed</div>
      <div>${wind_speed}</div>
</div>`

    
}