document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.color-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = button.getAttribute('data-answer');
            checkColorAnswer(answer);
        });
    });
});

function checkColorAnswer(answer) {
    if (answer === 'correct') {
        alert('Você acertou!');
    } else {
        alert('Você errou!');
    }
}