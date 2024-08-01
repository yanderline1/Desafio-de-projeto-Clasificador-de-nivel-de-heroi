let nome = "João";
let exp = 7324;
let classe = "";

if (exp < 1000) {
  classe = "Ferro"
} else if (exp > 1001 && exp < 2000) {
  classe = "Bronze"
} if (exp > 2001 && exp < 5000 ) {
  classe = "Prata"
} else if (exp > 5001 && exp < 7000) {
  classe = "Ouro"
} if (exp > 7001 && exp < 8000) {
  classe = "Platina"
} else if (exp > 8001 && exp < 9000) {
  classe = "Ascendente"
} if (exp > 9001 && exp < 10000 ) {
  classe = "Imortal"
} else if (exp >= 10001) {
  classe = "Radiante"
}

console.log("O herói de nome", nome, " é da classe: ", classe)