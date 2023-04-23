// o professor ao adicionar as notas, esqueceu da ultima nota, logo não conseguiria realizar a media
// adicionamos o comando push para ajuda-lo


const nota = [10, 6, 8];

nota.push(7);

const media = (nota[0] + nota[1] + nota[2] + nota[3]) / 4;

console.log(media);
