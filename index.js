const apiKey = '8e9efcab0731ba1b656557bdda77f7cb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather (city) {
const response = await fetch(apiUrl + city + `&appid=${apiKey}` )

if(response.status === 404) {
   document.querySelector('.error').style.display = 'block'
   document.querySelector('.weather').style.display='none'
}else{
   const data = await response.json()


document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C";
document.querySelector('.city').innerHTML=data.name;
document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h';

if(data.weather[0].main ==='Clouds'){
   document.querySelector('.weather-icon').src="images/clouds.png"
}else if(data.weather[0].main ==='Clear') {
   document.querySelector('.weather-icon').src="images/clear.png"
   
   
}else if(data.weather[0].main==='Rain') {
document.querySelector('.weather-icon').src="images/rain.png"

}else if(data.weather[0].main==='Drizzle'){
document.querySelector('.weather-icon').src="images/drizzle.png"
}else if(data.weather[0].main==='Mist') {
   document.querySelector('.weather-icon').src="images/mist.png"
}else if(data.weather[0].main==='Snow') {
   document.querySelector('.weather-icon').src="images/snow.png"
}
document.querySelector('.weather').style.display='block';
document.querySelector('.error').style.display='none';

}


}
document.querySelector('.search-button').addEventListener('click',() =>{
   const inputElement = document.querySelector('.city-name-input')
   const cityName =inputElement.value
   checkWeather(cityName);

   inputElement.value='';
  
})

document.body.addEventListener('keydown',(event) =>{
      if(event.key ==='Enter') {
         const inputElement = document.querySelector('.city-name-input')
         const cityName =inputElement.value
         checkWeather(cityName)
         inputElement.value='';
      }
      
   })
  