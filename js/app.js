const API_KEY=`e2e49138196d0d39b6f6bbc34ea8cccf`;
const searchTemperature=()=>{
    const cityName = document.getElementById('city-name');
    const city = cityName.value;
    cityName.value='';

   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   console.log(url);
   fetch(url)
   .then(res => res.json())
   .then( data => showTempareture(data))
 }
 const setInnerText =(id, text) =>{
     document.getElementById(id).innerText = text;
 }
 const showTempareture = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
     // set weather icon
    const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);
 }