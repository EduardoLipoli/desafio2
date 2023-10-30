function nivelJogador(saldoVitorias, saldoDerrotas) {
    return saldoVitorias - saldoDerrotas;
  }
  
  let resultado = nivelJogador(45, 5);

if (resultado <= 10){
    tipo = "Ferro"
} else if (resultado >= 11 && resultado < 20){
   tipo = "Bronze"
} else if (resultado >= 21 && resultado < 50){
    tipo = "Prata"
} else if (resultado >= 51 && resultado < 80){
    tipo = "Ouro"
} else if (resultado >= 81 && resultado < 90){
    tipo = "Diamante"
} else if (resultado >= 91 && resultado < 100){
    tipo = "Lendario"
} else if (resultado >= 101) {
    tipo = "Imortal"
}else {
    tipo = "Nivel desconhecido"
}

console.log("O Herói tem de saldo de " + resultado + " e está no nível de " + tipo);