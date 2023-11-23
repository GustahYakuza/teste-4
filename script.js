// ...

// Adicione essa função para carregar os elogios do arquivo JSON
function loadCompliments() {
    fetch('compliments.json')
        .then(response => response.json())
        .then(data => {
            compliments = data;
            showRandomCompliment();
        })
        .catch(error => console.error('Erro ao carregar os elogios:', error));
}

// Carrega os elogios ao iniciar o script
loadCompliments();
