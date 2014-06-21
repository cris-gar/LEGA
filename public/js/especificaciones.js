function leerGET() {
    var cadGET = location.search.substr(1, location.search.length);
    var arrGET = cadGET.split("&");
    var asocGET = new Array();
    var variable = "";
    var valor = "";
    for (i = 0; i < arrGET.length; i++) {
        var aux = arrGET[i].split("=");
        variable = aux[0];
        valor = aux[1];
        asocGET[variable] = valor;
    }
    return asocGET;
}
var paresVarValor = leerGET();
for (obj in paresVarValor) {
    document.getElementById('oculto').value = paresVarValor[obj];
}

var Button_Volver_Notas = document.getElementById('volver_notas');

Button_Volver_Notas.addEventListener('click', function() {
    window.location = "./Notas.html?carrera=" + document.getElementById('oculto').value;
    ;
});
if (localStorage.getItem('Especifico_Ramo_' + document.getElementById('oculto').value)) {
    Especifico_Ramo = localStorage.getItem('Especifico_Ramo_' + document.getElementById('oculto').value);
    Especifico_Ramo = JSON.parse(Especifico_Ramo);
    document.getElementById('profesor').value = Especifico_Ramo.Profesor;
    document.getElementById('sala').value = Especifico_Ramo.Sala;
}
var Button_llenar_Especificacion_Ramo = document.getElementById('llenar_Especificacion_Ramo');

Button_llenar_Especificacion_Ramo.addEventListener('click', function() {

    var Carrera = document.getElementById('oculto').value;
    var Profesor = document.getElementById('profesor').value;
    var Sala = document.getElementById('sala').value;

    var Especificaciones_Ramo = {Profesor: "" + Profesor + "", Sala: "" + Sala + ""};
    localStorage.setItem("Especifico_Ramo_" + Carrera, JSON.stringify(Especificaciones_Ramo));
    window.location.href = "./Notas.html?carrera=" + Carrera;
});
