function convert(){
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;



    fetch(`https://open.er-api.com/v6/latest/${moeda}`).
    then(
        function (resposta){
            return resposta.json();
        }
    ).then(
        function(resposta){
        let resultado = valor / resposta.rates.BRL;
         console.log(resposta.rates.BRL)
         console.log(resultado)
    //   document.getElementById('resultado').style.display='none';
      document.getElementById('resultado').innerText = resultado
    }
).catch()
  
}
