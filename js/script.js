document.addEventListener('DOMContentLoaded', function() {
    const fraseDiv = document.getElementById('frase');
    const novaFraseBtn = document.getElementById('novaFraseBtn');

    async function obterFrase() {
        try {
            const response = await fetch('https://frases.docapi.dev/frase/obter');
            const data = await response.json();
            fraseDiv.textContent = data.frase;
        } catch (error) {
            fraseDiv.textContent = 'Erro ao obter a frase. Tente novamente mais tarde.';
        }
    }

    novaFraseBtn.addEventListener('click', obterFrase);

    // Carregar uma frase ao carregar a página
    obterFrase();
});
