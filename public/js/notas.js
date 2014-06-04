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
    document.write("'" + obj + "''vale<b>" + paresVarValor[obj] + "</b><br>");
}