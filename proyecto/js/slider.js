$(document).ready(function(){
    const slider = document.querySelector("#slider");
 let sliderSection = document.querySelectorAll(".slider-section");
 let sliderSectionLast = sliderSection[sliderSection.length -1];

 const btnLeft = document.querySelector("#btn-left");
 const btnRight = document.querySelector("#btn-right");

 slider.insertAdjacentElement('afterbegin', sliderSectionLast);

 function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
 }

 function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);

 }

 btnRight.addEventListener('click', function(){
    Next();
 });

 btnLeft.addEventListener('click', function(){
    Prev();
 });

 setInterval(function(){
    Next();
 }, 5000)

    var clima = document.getElementById("clima")
    var comuna = document.getElementById("comuna")
    var temperatura= document.getElementById("temperatura")
    var descripcion= document.getElementById("estado");
    var imagen = document.getElementById("imagen")
    var uf = document.getElementById("uf");
    var dolar = document.getElementById("dolar");
    var utm = document.getElementById("utm");
    var ubicacion = navigator.geolocation.getCurrentPosition(data=>{
        
        var latitud=data.coords.latitude;
        var longitud = data.coords.longitude;
        

        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&units=metric&appid=3242b1dab11daf94dbb5c2c45df0e07a`,
        function(data){
            console.log(data)
            comuna.innerHTML=data.name;
            temperatura.innerHTML=data.main.temp+"°C";
            descripcion.innerHTML = data.weather[0].description;
            var icono = data.weather[0].icon;
            imagen.setAttribute("src",`http://openweathermap.org/img/wn/${icono}@2x.png`)
            
        })
        
        
        
    });
    $.getJSON("https://mindicador.cl/api/uf",function(valor){
        console.log(valor.nombre,valor.serie[0].valor);
        uf.innerHTML = valor.nombre+": $"+valor.serie[0].valor

    })

    $.getJSON("https://mindicador.cl/api/dolar",function(valor){
        console.log(valor.nombre,valor.serie[0].valor);
        dolar.innerHTML = valor.nombre+": $"+valor.serie[0].valor

    })
    $.getJSON("https://mindicador.cl/api/utm",function(valor){
        console.log(valor.nombre,valor.serie[0].valor);
        utm.innerHTML = valor.nombre+": $"+valor.serie[0].valor

    })
    

    
    
  
   
    
})


