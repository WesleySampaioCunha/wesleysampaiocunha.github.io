// Retorne as animal que tem o nome com 3 letras ou mais
// Retorne as animal com mais de 7 anos
// Retorne as animal cuja nome termina com a

const animal = [
    {nome: 'laila', idade: 5},
    {nome: 'Kiara', idade: 7},
    {nome: 'rex', idade: 1},
    {nome: 'luke', idade: 4},
    {nome: 'Mel', idade: 15}, 
]

const animalComMaistresLetras = animal.filter(function callbackFilterAnimal(cao) {
    return cao.nome.length <= 3;
});
//console.log(animalComMaistresLetras);

const animalMaisVelhos = animal.filter((cao) => cao.idade >= 7);
console.log(animalMaisVelhos);

const animalTerminaComA = animal.filter((cao) => cao.nome.toLowerCase().endsWith('a'));
console.dir(animalTerminaComA); 
