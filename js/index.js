function mostrarDataHora(){
    var data = new Date();
    
    console.log(data.toLocaleString());

    document.getElementById('dataHora').innerHTML = data.toLocaleString();

    
}
mostrarDataHora();

function alterarNomeAlteracao() {
        const nomeAlteracao = document.getElementById('nomeAlteracao');
        nomeAlteracao.innerText = nomeAlteracao.innerText.toUpperCase();
}

alterarNomeAlteracao();