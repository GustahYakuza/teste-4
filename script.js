let compliments = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia!",
    "Ninguém é tão especial quanto você!",
    "Sua bondade é contagiante!",
    "O mundo é melhor com você nele!",
    "Você é a razão do meu sorriso!",
    "Sua inteligência me inspira!",
    "Seu coração é tão generoso!",
    "Cada dia ao seu lado é um presente!",
    "Você é o amor da minha vida!",
    "Sua gentileza é inigualável!",
    "Seu toque é como uma brisa suave!",
    "Em seus olhos, encontro o universo!",
    "Seu abraço é o meu lugar favorito!",
    "Sua voz é a melodia dos meus dias!",
    "Com você, cada momento é mágico!",
    "Você é a poesia que meu coração escreve!",
    "Seu carinho aquece minha alma!",
    "Sua presença é um presente divino!",
    "Com você, a vida é um eterno romance!",
    "Você é a estrela que ilumina meu céu!",
    "Seu sorriso é como o sol, radiante e caloroso!",
    "Ao seu lado, cada dia é uma aventura!",
    "Você torna o simples extraordinário!",
    "Seu amor é a força que impulsiona meu coração!",
    "Você é a inspiração por trás dos meus sonhos!",
    "Sua positividade ilumina até os dias mais nublados!",
    "Em cada detalhe, encontro razões para te amar!",
    "Seu charme é irresistível, como um feitiço do amor!",
    "Você é o tesouro que encontrei no meu caminho!",
    "Sua compreensão é a base da nossa conexão!",
    "Ao seu lado, a vida é uma bela jornada!",
    "Seu sorriso contagia a felicidade ao meu redor!",
    "Você é a razão pela qual a vida é tão colorida!",
    "Sua presença transforma momentos simples em memórias eternas!",
    "Com você, o amor é a linguagem mais poderosa!",
    // Adicione mais elogios conforme desejado
];

function showRandomCompliment() {
    const complimentElement = document.querySelector('.compliment-text');

    // Verifica se o elemento foi encontrado antes de manipulá-lo
    if (complimentElement) {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const compliment = compliments[randomIndex];
        complimentElement.textContent = compliment;
    } else {
        console.error('Elemento .compliment-text não encontrado.');
    }
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

// Mostra um elogio ao carregar a página
document.addEventListener('DOMContentLoaded', showRandomCompliment);
