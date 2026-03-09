const btnAcao = document.querySelector('#btn-acao');
const inputUsuario = document.querySelector('#input-usuario');
const listaDinamica = document.querySelector('#lista-dinamica');


function processarClique() {
    const textoDigitado = inputUsuario.value.trim(); 


    if (textoDigitado === "") {
        alert("Por favor, digita algo antes de clicar!");
    } else {

        if (listaDinamica.innerHTML.includes("Aguardando")) {
            listaDinamica.innerHTML = "";
        }

        const agora = new Date();
        const hora = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const timestamp = `${hora}:${minutos}`;

        
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `<strong>[${timestamp}]</strong> ${textoDigitado}`;
        
        
        listaDinamica.appendChild(novoItem);

        
        inputUsuario.value = "";
        inputUsuario.focus(); 
    }
}



btnAcao.addEventListener('click', processarClique);


inputUsuario.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processarClique();
    }
});