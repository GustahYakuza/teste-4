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
    "Você é o amor da minha vida!"
];

function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentElement = document.querySelector('.compliment-text');
    complimentElement.textContent = compliment;
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

// Mostra um elogio ao carregar a página
showRandomCompliment();
