const key = "750c0a6c427e5a8b6a6d2d7b3c8c7279";

const btn_buscar = document.querySelector(".btn-busca");

function exibirDados(dados){
    console.log(dados);
    document.querySelector('.cidade').innerHTML = dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".min").innerHTML = Math.floor(dados.main.temp_min) + "°"
    document.querySelector(".max").innerHTML = Math.floor(dados.main.temp_max) + "°"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: "+dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json());

    exibirDados(dados);
}

btn_buscar.addEventListener("click",()=>{
    const cidade = document.querySelector(".input-cidade");
    buscarCidade(cidade.value);
    
    cidade.value = "";
})
