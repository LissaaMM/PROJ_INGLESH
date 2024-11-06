function toggleSidebar() {
    const sidebar = document.getElementById('navigation_header');
    const isHidden = sidebar.style.marginLeft === '-100vw' || sidebar.style.marginLeft === '';

    if (isHidden) {
        sidebar.style.animation = 'showSidebar 0.3s forwards';
        sidebar.style.marginLeft = '0';
    } else {
        sidebar.style.animation = 'showSidebar 0.3s reverse';
        sidebar.style.marginLeft = '-100vw';
    }
}

function redirectPage(value) {
    window.location.href = './src/html/' + value.toLowerCase() + '.html';
}

let score = 0;
const buttons = document.querySelectorAll('.color-button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.closest('button').dataset.answer === 'correct') {
            e.target.closest('button').style.backgroundColor = 'green';
            score++;
        } else {
            e.target.closest('button').style.backgroundColor = 'red';
        }
        document.getElementById('score').innerText = 'Acertos: ' + score;
    });
});

let scorei = 0;
let wrongAnswers = 0;

const buttonns = document.querySelectorAll('.color-button');

// Adicionando o evento de clique para cada botão
buttonns.forEach(button => {
    button.addEventListener('click', (e) => {
        const answer = e.target.dataset.answer;
        
        // Verifica se a resposta está correta ou errada
        if (answer === 'correct') {
            scorei++;
            e.target.style.backgroundColor = 'green';  // Resposta correta (verde)
        } else {
            wrongAnswers++;
            e.target.style.backgroundColor = 'red';  // Resposta errada (vermelho)
        }

        // Atualiza o texto de acertos e erros
        document.getElementById('score').innerText = `Acertos: ${score} | Erros: ${wrongAnswers}`;
    });
});

// Função para reiniciar o quiz
function resetQuiz() {
    // Reinicia as variáveis de pontuação
    scorei = 0;
    wrongAnswers = 0;

    // Reseta as cores dos botões
    buttonns.forEach(button => {
        button.style.backgroundColor = '#3498db';  // Cor inicial dos botões
    });

    // Reseta o texto de acertos e erros
    document.getElementById('score').innerText = `Acertos: ${score} | Erros: ${wrongAnswers}`;
}

