function mostrarDataHora(){
    var data = new Date();
    
    console.log(data.toLocaleString());

    document.getElementById('dataHora').innerHTML = data.toLocaleString();

    
}
mostrarDataHora();