document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação customizada

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido: o número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: o número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});
