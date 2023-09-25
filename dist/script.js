    const input = document.querySelector('#input')
    const btn = document.querySelector("#btn")
    const city = document.querySelector("#city")
    const T = document.querySelector("#temp")
    const humidity = document.querySelector("#Humidity")
    const windSpeed = document.querySelector("#speed")
    const desc = document.querySelector("#description")
    const weather = document.querySelector("#actWea")
    const body = document.querySelector("body")
    
    const btn1 = document.getElementById("bt1")
    const btn2 = document.getElementById("bt2")
    const btn3 = document.getElementById("bt3")
    const btn4 = document.getElementById("bt4")

    const icons = document.getElementById("icons")

btn.addEventListener("click",()=>{

    let cityName = input.value
    const key = 'bcf97c766000096504fb6ce44fba6d96'
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)

    api.then((data)=>{
        return data.json()
    })
    .then((data1)=>{
       //City name
       city.innerText = data1.name

       //data1.main.temp
       let flt = data1.main.temp
       let int = parseInt(flt)
       T.innerText = int+"°"

       //data1.wind.speed
       windSpeed.innerText = data1.wind.speed+" km/h"

       //data1.main.humidity
       humidity.innerText = data1.main.humidity+"%"

       //data1.weather[0].main
       weather.innerText = data1.weather[0].main

       //data1.weather[0].description
       desc.innerText = data1.weather[0].description

       //for different backgrounds
       if(data1.weather[0].main == "Rain"){
       body.style.backgroundImage = "url('bg imgs/rainyy.avif')"
       icons.src = "icons/rain.png"
       }

       if(data1.weather[0].main == "Clouds"){
        body.style.backgroundImage = "url('bg imgs/clllloudy.avif')"
        icons.src = "icons/clouds.png"
        }

       if(data1.weather[0].main == 'Mist'){
        body.style.backgroundImage = "url('bg imgs/mist.png')"
        icons.src = "icons/mist.png"
          }

       if(data1.weather[0].main == 'Haze'){
        body.style.backgroundImage = "url('bg imgs/mist.png')"
        icons.src = "icons/mist.png"
            }
        
       if(data1.weather[0].main == 'Clear'){
        body.style.backgroundImage = "url('bg imgs/Sunny.avif')"
        icons.src = "icons/clear.png"
        }

        if(data1.weather[0].main == "Snow"){
            body.style.backgroundImage = "url('bg imgs/Snoww.avif')"
            icons.src = "icons/snow.png"
            }

            if(data1.weather[0].main == "Drizzle"){
                body.style.backgroundImage = "url('bg imgs/drizzle.png')"
                }
        if(data1.weather[0].main == "Thounderstrom"){
           body.style.backgroundImage = "url('bg imgs/Thounder.avif')"
        }
    })
})

function Today(){
    let today = document.getElementById("day")
    const date = new Date()
    const dayOfWeek = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayDayName = dayNames[dayOfWeek];
    today.innerText = todayDayName
}

const dateTime = ()=>{
    let time = document.getElementById("time")
    const date = new Date()
    console.log(date)

    let hr = date.getHours()
    let min = date.getMinutes()

   time.innerText = hr+":"+min
}

function datee(){
        const dat = document.getElementById("date")
        const date = new Date();
        let dayy = date.getDate();
        let monthh = date.getMonth() + 1;
        let yearr = date.getFullYear();

        dat.innerText = dayy+"-"+monthh+"-"+yearr;
}

setInterval(()=>{
    dateTime()
},100)

Today()
datee()

//cityWise data
function cityWiseData(data1){
           //City name
           city.innerText = data1.name
           //data1.main.temp
           let flt = data1.main.temp
           let int = parseInt(flt)
           T.innerText = int+"°"
    
           //data1.wind.speed
           windSpeed.innerText = data1.wind.speed+" km/h"
    
           //data1.main.humidity
           humidity.innerText = data1.main.humidity+"%"
    
           //data1.weather[0].main
           weather.innerText = data1.weather[0].main
    
           //data1.weather[0].description
           desc.innerText = data1.weather[0].description
    
           //for different backgrounds
           if(data1.weather[0].main == "Rain"){
           body.style.backgroundImage = "url('bg imgs/rainyy.avif')"
           icons.src = "icons/rain.png"
           }
    
           if(data1.weather[0].main == "Clouds"){
            body.style.backgroundImage = "url('bg imgs/clllloudy.avif')"
            icons.src = "icons/clouds.png"
            }
    
           if(data1.weather[0].main == 'Mist'){
            body.style.backgroundImage = "url('bg imgs/mist.png')"
            icons.src = "icons/mist.png"
              }
    
           if(data1.weather[0].main == 'Haze'){
            body.style.backgroundImage = "url('bg imgs/mist.png')"
            icons.src = "icons/mist.png"
                }
            
           if(data1.weather[0].main == 'Clear'){
            body.style.backgroundImage = "url('bg imgs/Sunny.avif')"
            icons.src = "icons/clear.png"
            }
    
            if(data1.weather[0].main == "Snow"){
                body.style.backgroundImage = "url('bg imgs/Snoww.avif')"
                icons.src = "icons/snow.png"
                }
    
                if(data1.weather[0].main == "Drizzle"){
                    body.style.backgroundImage = "url('bg imgs/drizzle.png')"
                    }
            if(data1.weather[0].main == "Thounderstrom"){
               body.style.backgroundImage = "url('bg imgs/Thounder.avif')"
            }
}

btn1.addEventListener("click",()=>{
    let cityName = btn1.innerText
    const key = 'bcf97c766000096504fb6ce44fba6d96'
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)

    api.then((dat)=>{
        return dat.json()
    })
    .then((dataDelhi)=>{
        cityWiseData(dataDelhi)
    })
})

btn2.addEventListener("click",()=>{
    let cityName = btn2.innerText
    const key = 'bcf97c766000096504fb6ce44fba6d96'
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)

    api.then((dat)=>{
        return dat.json()
    })
    .then((dataYork)=>{
        cityWiseData(dataYork)
    })
})

btn3.addEventListener("click",()=>{
    let cityName = btn3.innerText
    const key = 'bcf97c766000096504fb6ce44fba6d96'
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)

    api.then((dat)=>{
        return dat.json()
    })
    .then((dataCalifornia)=>{
        cityWiseData(dataCalifornia)
    })
})

btn4.addEventListener("click",()=>{
    let cityName = btn4.innerText
    const key = 'bcf97c766000096504fb6ce44fba6d96'
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)

    api.then((dat)=>{
        return dat.json()
    })
    .then((dataTokyo)=>{
        cityWiseData(dataTokyo)
    })
})