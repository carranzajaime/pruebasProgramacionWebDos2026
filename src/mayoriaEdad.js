var userRequest = prompt("Digite su edad para conocer si puede entrar");
if (userRequest >= 18){
   console.log("Va, puedes pasar");
   } else if (userRequest >= 0 && userRequest <= 15){
    console.log("De verdad?");
   } else {
   console.log("No podías conseguir una INE falsa?");
   }