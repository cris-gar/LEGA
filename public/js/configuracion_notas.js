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
    document.getElementById('oculto_carrera').value = paresVarValor[obj];
}

var registerBtn = document.getElementById('llenar_Especificacion_Notas');

registerBtn.addEventListener('click', function() {

    var Cantidad_Notas = document.getElementById('cantidad_notas').value;
    var Nota_Minima_Aprobar = document.getElementById('nota_minima').value;
    var Nota_Minima_Examen = document.getElementById('nota_minima_examen').value;
    var Carrera = document.getElementById('oculto_carrera').value;

    var configuracion_notas = {Cantidad_Notas: "" + Cantidad_Notas + "", Nota_Minima_Aprobar: "" + Nota_Minima_Aprobar + "", Nota_Minima_Examen: "" + Nota_Minima_Examen + ""};
    localStorage.setItem("Notas_" + Carrera, JSON.stringify(configuracion_notas));
    window.location.href = "./Notas.html?carrera=" + Carrera;
});