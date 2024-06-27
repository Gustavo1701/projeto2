function mostrarDataHora(){
    var data = new Date();
    //att
    console.log(data.toLocaleTimeString());

    document.getElementById('dataHora').innerHTML = data.toLocaleString();

    
}
mostrarDataHora();

function alterarNomeAlteracao() {
        const nomeAlteracao = document.getElementById('nomeAlteracao');
        nomeAlteracao.innerText = nomeAlteracao.innerText.toUpperCase();
}

alterarNomeAlteracao();