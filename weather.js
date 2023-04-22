
const searchtag = document.getElementById("searchbtn");
const inputtext = document.getElementById("inputbar");
const discriptiontag = document.querySelector(".discription")
const temptag = document.querySelector('.temp');
const citytag = document.querySelector(".city");
const Humiditytag = document.querySelector('.Humidity');
const windtag = document.querySelector('.wind');
const weatherimg = document.querySelector(".weathericon01");
const errortag =document.querySelector(".Error");
const div01 =  document.querySelector(".weather")
const div02 = document.querySelector(".details")

async function checkweather (city){
    const apikey = 'c3ce80294f1644f35f88304592785289';
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

  
    const weather_data = await fetch(`${apiurl}`).then(response => 
        response.json());
        console.log(weather_data);

        if(weather_data.cod === `404`){ 
                // weatherimg.src = "../images/404.png";
                errortag.style.display="flex";
                div01.style.display="none";
                div02.style.display="none";
                return;
            }

            //showing the weather details 
            errortag.style.display="none";
            div01.style.display="flex";
        div02.style.display="flex";

        temptag.innerHTML = `${weather_data.main.temp}°c`;
        discriptiontag.innerHTML = `${weather_data.weather[0].description}`
        Humiditytag.innerHTML =`${weather_data.main.humidity}%`;
        windtag.innerHTML = `${weather_data.wind.speed}Km/h`;
        citytag.innerHTML =`${inputtext.value}`;
        //citytag.innerHTML =`${weather_data.main.main[0]}`;


        switch(weather_data.weather[0].main){
                        case 'Clouds':
                        weatherimg.src = "/images/clouds.png";
                        break;
                        case 'Clear':
                        weatherimg.src = "/images/clear.png";
                        break;
                        case 'Mist':
                        weatherimg.src = "/images/mist.png";
                        break;
                        case 'Drizzle':
                        weatherimg.src = "/images/drizzle.png";
                        break
                        case 'Rain':
                        weatherimg.src = "/images/rain.png";
                        break
                        case 'Snow':
                        weatherimg.src = "/images/snow.png";
        }
}

searchtag.addEventListener('click', ()=> {
        checkweather(inputtext.value)
})


//HERE  we are addding the r
inputtext.addEventListener('keyup', (e)=>{
        if(e.keyCode === 13){
                checkweather(e.target.value)
               // console.log(e.target.value) ;   
        }
})








