function redirectPage(value) { 
    window.location.href = './src/html/' + value.toLowerCase() + '.html'; 
}
let score = 0; const buttons = document.querySelectorAll('.color-button'); buttons.forEach(button => { button.addEventListener('click', (e) => { if (e.target.closest('button').dataset.answer === 'correct') { e.target.closest('button').style.backgroundColor = 'green'; score++; } else { e.target.closest('button').style.backgroundColor = 'red'; } document.getElementById('score').innerText = 'Acertos: ' + score; }); 
})