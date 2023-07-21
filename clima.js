const key ="f9cbf2d2c66c307a2c21554b35291f95"

function DadosNaTela(dados) {
console.log(dados)
document.querySelector(".city").innerHTML = dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".texto_prev").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade"
document.querySelector(".img_prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscar(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
   
    
    DadosNaTela(dados)
}


function cliquei() {
    const city = document.querySelector(".input_city").value

    buscar(city)
}