// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 271cb2de976b1f55a3d79195750aac52
const waetherApi={
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?",
    key:"271cb2de976b1f55a3d79195750aac52"
}
//event listener function
// var x = event.which || event.keyCode;
//   var keyCode=13;
const searchInput=document.getElementById('input-box');
searchInput.addEventListener('keypress',(event)=>{
    if (event.keyCode == 13) {
        console.log(searchInput.value)
        getWeatherReport(searchInput.value)
    }
});
//get weather report
function getWeatherReport(city) {
    fetch(`${waetherApi.baseUrl}q=${city}&appid=${waetherApi.key}&units=metric `)
    .then(weather=>{
        return weather.json();
    }).then(showweatherReport);
}
//show weather report
function showweatherReport(weather) {
    console.log(weather)
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temparature=document.getElementById('temp');
    temparature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minmax=document.getElementById('min-max');
    minmax.innerHTML=` <span>min</span> ${Math.floor(weather.main.temp_min)}&deg;C | <span>max</span> ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let weatherType=document.getElementById('weather');
    weatherType.innerHTML=`${weather.weather[0].main}`

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerHTML=datemanage(todayDate)
}
// date manage function

function datemanage(dateArg) {
    let days=["sun","mon","tue","wed","thu","fri","sut"]
    let months=["jan","feb","mar","apr","may","jun","jul","aug","sep","nov","dec"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    
    return `${date} ${day} | ${month} ${year}`
}