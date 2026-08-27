var userRequest = prompt("Que tabla desea visualizar?");
var multi = 1;
console.log("Se hará la tabla del: "+userRequest);
while(multi <= 10){
    var resulta;
    resulta = (userRequest * multi);
    console.log(userRequest+" X "+multi+" = " +resulta);
    multi++;
    }