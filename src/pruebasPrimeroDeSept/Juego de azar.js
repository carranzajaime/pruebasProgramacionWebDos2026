let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
    //Math.floor(Math.random() * (max - min)) + min;
console.log(numeroMaquina);

let vidas = 3;
var optionUser = prompt("¿Qué numero del 1 al 10 es el correcto?");

while (vidas > 0){
    if(optionUser == numeroMaquina){
        prompt("Acertaste!");
    } else {
        vidas--
        prompt("Fallaste, te quedan: "+vidas);
     }
}
    if(vidas == 0){
        alert("Te quedaste sin vidas");
    } 