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

Especificaciones_Notas = localStorage.getItem('Notas_' + document.getElementById('oculto').value);
Especificaciones_Notas = JSON.parse(Especificaciones_Notas);
for (i = 1; i <= Especificaciones_Notas.Cantidad_Notas; i++) {
    $('#Notas').append('<div class="form-group"><label class="col-xs-3 control-label">Nota ' + i + '</label><div class="col-xs-3"><input type="number" name="nota_minima_examen" id="nota_minima_examen" placeholder="Nota minima para dar examen" class="form-control"/></div><div class="col-xs-3"><input type="number" name="porcentaje' + i + '" id="porcentaje' + i + '" placeholder="Porcentaje" class="form-control"/></div></div>');
}
$('#Notas').append('<div class="form-group"><label class="col-xs-5 control-label"></label><div class="col-xs-6"><input type="button" id="llenar_Especificacion_Notas" class="btn btn-primary" value="Guardar"/></div></div>');
var registerBtn = document.getElementById('configurar');

registerBtn.addEventListener('click', function() {
    window.location = "./ConfigurarNotas.html?carrera=" + document.getElementById('oculto').value;
});