var cidade = document.getElementById('cidade');
const chave = "1e88f70422cf39e04785fea7cec7c376";
var res = document.getElementById('resultado')

if (chave == '') {
    document.getElementById('des').innerHTML = "<h1>Precisa de uma chave!!!</h1> <br> Encontre no site da api openweathermap";
}
function buscarPrevisao() {
    var c = cidade.value;
    var linguagem = "pt_br";
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+c+"&units=metric"+"&appid="+chave+"&lang="+linguagem+"";
    var clean =   document.getElementById('cidade');
    clean.value = "";

    
    fetch(url, {
            method: "GET",
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                });
            }

        })
        .then(function (data) {
            mostrarPrevisao(data)
           
        })
        .catch(error => {
            console.log(error);
        });
}

function mostrarPrevisao(dados) {

   var des = dados.weather[0].description;
   
    document.getElementById('des').innerHTML = dados.weather[0].description;
    document.getElementById('min').innerHTML = dados.main.temp_min+"<code>&deg;</code>"+"c";
    document.getElementById('local').innerHTML = dados.name;
    
}


