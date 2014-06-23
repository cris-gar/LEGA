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
if (localStorage.getItem('Especifico_Notas_' + document.getElementById('oculto').value)) {
    if (localStorage.getItem("Notas_" + document.getElementById('oculto').value)) {
        Especificaciones_Notas = localStorage.getItem('Especifico_Notas_' + document.getElementById('oculto').value);
        Especificaciones_Notas = JSON.parse(Especificaciones_Notas);

        Notas = localStorage.getItem("Notas_" + document.getElementById('oculto').value);
        Notas = JSON.parse(Notas);
        for (i = 1; i <= Especificaciones_Notas.Cantidad_Notas; i++) {
            $('#Notas').append('<div class="form-group"><label class="col-xs-3 control-label">Nota ' + i + '</label><div class="col-xs-3"><input type="number" name="nota_' + i + '" id="nota_' + i + '" placeholder="Nota minima para dar examen" class="form-control" /></div><label class="col-xs-3 control-label">Porcentaje</label><div class="col-xs-3"><input type="number" name="porcentaje_' + i + '" id="porcentaje_' + i + '" placeholder="%" class="form-control" value=""/></div></div>');
            document.getElementById('nota_' + i + '').value = Notas['nota_' + i];
            document.getElementById('porcentaje_' + i + '').value = Notas["porcentaje_" + i] * 100;
        }
        $('#Notas').append('<div class="form-group"><label class="col-xs-5 control-label"></label><div class="col-xs-6"><input type="button" id="llenar_Especificacion_Notas" class="btn btn-primary" value="Guardar"/></div></div>');
        var Resultado_Notas = document.getElementById('llenar_Especificacion_Notas');
        var Sumatoria_Notas = 0;
        var NOTAs = {};
        Resultado_Notas.addEventListener('click', function() {
            for (j = 1; j <= Especificaciones_Notas.Cantidad_Notas; j++) {
                NOTAs["nota_" + j + ""] = parseFloat(document.getElementById("nota_" + j + "").value);
                NOTAs["porcentaje_" + j + ""] = parseFloat(document.getElementById("porcentaje_" + j + "").value) / 100;
                Resultado_porcentaje = parseFloat(document.getElementById("nota_" + j + "").value) * (parseFloat(document.getElementById("porcentaje_" + j + "").value) / 100);
                Sumatoria_Notas = Sumatoria_Notas + Resultado_porcentaje;
            }
            NOTAs["nota_final"] = Sumatoria_Notas;
            localStorage["Notas_" + document.getElementById('oculto').value] = JSON.stringify(NOTAs);
            //alert(Sumatoria_Notas);
            window.location.reload();
        });
        Nota = localStorage.getItem("Notas_" + document.getElementById('oculto').value);
        Nota = JSON.parse(Nota);
        document.getElementById('nota_pasar').innerHTML = "Tu nota minima para pasar es: " + Especificaciones_Notas.Nota_Minima_Aprobar;
        if (Nota.nota_final >= parseFloat(Especificaciones_Notas.Nota_Minima_Aprobar)) {
            document.getElementById('comentario').innerHTML = "Felicitaciones actualmente estas pasando con un: " + Nota.nota_final;
        }
        if (Nota.nota_final >= parseFloat(Especificaciones_Notas.Nota_Minima_Examen) && Nota.nota_final < parseFloat(Especificaciones_Notas.Nota_Minima_Aprobar)) {
            document.getElementById('comentario').innerHTML = "Amig@, actualmente tienes que rendir examen con un: " + Nota.nota_final;
        }
        if (Nota.nota_final < parseFloat(Especificaciones_Notas.Nota_Minima_Examen)) {
            document.getElementById('comentario').innerHTML = "Amig@, actualmente estas reprobando con un: " + Nota.nota_final;
        }
    }
    else {
        Especificaciones_Notas = localStorage.getItem('Especifico_Notas_' + document.getElementById('oculto').value);
        Especificaciones_Notas = JSON.parse(Especificaciones_Notas);
        for (i = 1; i <= Especificaciones_Notas.Cantidad_Notas; i++) {
            $('#Notas').append('<div class="form-group"><label class="col-xs-3 control-label">Nota ' + i + '</label><div class="col-xs-3"><input type="number" name="nota_' + i + '" id="nota_' + i + '" placeholder="Nota minima para dar examen" class="form-control"/></div><label class="col-xs-3 control-label">Porcentaje</label><div class="col-xs-3"><input type="number" name="porcentaje_' + i + '" id="porcentaje_' + i + '" placeholder="%" class="form-control"/></div></div>');
        }
        $('#Notas').append('<div class="form-group"><label class="col-xs-5 control-label"></label><div class="col-xs-6"><input type="button" id="llenar_Especificacion_Notas" class="btn btn-primary" value="Guardar"/></div></div>');
        var Resultado_Notas = document.getElementById('llenar_Especificacion_Notas');
        var Sumatoria_Notas = 0;
        var NOTAs = {};
        Resultado_Notas.addEventListener('click', function() {
            for (j = 1; j <= Especificaciones_Notas.Cantidad_Notas; j++) {
                NOTAs["nota_" + j + ""] = parseFloat(document.getElementById("nota_" + j + "").value);
                NOTAs["porcentaje_" + j + ""] = parseFloat(document.getElementById("porcentaje_" + j + "").value) / 100;
                Resultado_porcentaje = parseFloat(document.getElementById("nota_" + j + "").value) * (parseFloat(document.getElementById("porcentaje_" + j + "").value) / 100);
                Sumatoria_Notas = Sumatoria_Notas + Resultado_porcentaje;
            }
            NOTAs["nota_final"] = Sumatoria_Notas;
            localStorage["Notas_" + document.getElementById('oculto').value] = JSON.stringify(NOTAs);
            //alert(Sumatoria_Notas);
            window.location.reload();
        });
        Nota = localStorage.getItem("Notas_" + document.getElementById('oculto').value);
        Nota = JSON.parse(Nota);
        document.getElementById('nota_pasar').innerHTML = "Tu nota minima para pasar es: " + Especificaciones_Notas.Nota_Minima_Aprobar;
        if (Nota.nota_final >= parseFloat(Especificaciones_Notas.Nota_Minima_Aprobar)) {
            document.getElementById('comentario').innerHTML = "Felicitaciones actualmente estas pasando con un: " + Nota.nota_final;
        }
        if (Nota.nota_final >= parseFloat(Especificaciones_Notas.Nota_Minima_Examen) && Nota.nota_final < parseFloat(Especificaciones_Notas.Nota_Minima_Aprobar)) {
            document.getElementById('comentario').innerHTML = "Amig@, actualmente tienes que rendir examen con un: " + Nota.nota_final;
        }
        if (Nota.nota_final < parseFloat(Especificaciones_Notas.Nota_Minima_Examen)) {
            document.getElementById('comentario').innerHTML = "Amig@, actualmente estas reprobando con un: " + Nota.nota_final;
        }
    }
} else {
    alert("Ingrese a la sección Configurar Notas");
}
var registerBtn = document.getElementById('configurar');
registerBtn.addEventListener('click', function() {
    window.location = "./ConfigurarNotas.html?carrera=" + document.getElementById('oculto').value;
});
var Button_Especificaciones = document.getElementById('especificaciones');
Button_Especificaciones.addEventListener('click', function() {
    window.location = "./Especificaciones.html?carrera=" + document.getElementById('oculto').value;
});