body {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: url('caminho/para/o/seu/fundo-romantico.jpg') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
}

header {
    background-color: #ff7070;
    color: #fff;
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.container {
    text-align: center;
    margin-top: 20px;
}

form {
    background: linear-gradient(135deg, #f5f5f5, #fff);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-out; /* Adiciona uma animação de fade in */
}

label {
    display: block;
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #ff7070;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease-in-out;
}

button:hover {
    background-color: #e5673b;
    transform: translateY(-3px);
}

@media (max-width: 600px) {
    header {
        position: static;
    }

    form {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}