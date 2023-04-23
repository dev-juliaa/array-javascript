// o professor acidentalmente adicionou uma nota a mais
// utilizamos o comando pop para remover a ultima nota 
// e o ajudar a realizar a media corretamente

const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

console.log(`a media é ${media}`);