document.addEventListener('DOMContentLoaded', function() {
    const fraseDiv = document.getElementById('frase');
    const novaFraseBtn = document.getElementById('novaFraseBtn');

    async function obterFrase() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
                };
        
        try {
            const response = await fetch('https://frases.docapi.dev/frase/obter', requestOptions);
            const data = await response.json();
            
            let random = Math.floor(Math.random() * data.resposta.length);

            fraseDiv.textContent = data.resposta[random].frase;
        } catch (error) {
            fraseDiv.textContent = 'Erro ao obter a frase. Tente novamente mais tarde.';
        }
    }

    novaFraseBtn.addEventListener('click', obterFrase);

    // Carregar uma frase ao carregar a página
    obterFrase();
});
