//4) Escreva um programa em JS que gera números entre 1000 e 1999 e mostra aqueles que divididos por 11 dão resto 5
//foco na palavra gerar
var message = ("O valor dividido por 11 que resta 5 é = ")

for (i=1000; i < 2000; i++){
    if (i%11==5) {
      //console.log(i);
    var result = ((i-5)/11)*11;
    document.body.innerHTML += ("<p>" + message + i + " porque " + i + " - " + result + " é igual a " + " 5 " + "</P>");
    //essa expressão se equivale a forma como foi colocada acima (+=) document.body.innerHTML = document.body.innerHTML + ("<p>" + message + i + "</P>");
    }
}
