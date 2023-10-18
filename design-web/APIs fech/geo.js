let tiempo= document.getElementById("tiempo")

//GEO//

function mostrar_posicion( posicion ){

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "bbf8893c6e8030e157bb633d11a66e17";


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then( response=> response.json())
        .then( data=>{
                    tiempo.innerHTML = `<p>${data.name}</p>
                                        <p>${data.main.temp}°</p>
                                        <p>${data.weather[0].description}</p>`
        })

    
}


navigator.geolocation.getCurrentPosition(mostrar_posicion);
