/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (localStorage.getItem('cantidadSemestre')) {
    for (i = 1; i <= localStorage.getItem('cantidadSemestre'); i++) {
        car = localStorage.getItem(i);
        car = JSON.parse(car);
        $('#malla').append('<tr id="semestre' + i + '"></tr>');
        columna1 = $('#semestre' + i).append('<td class="success"><input type="button" id="ramo1_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo1 + '"></td><td class="success"><input type="button" id="ramo2_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo2 + '"></td><td class="success"><input type="button" id="ramo3_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo3 + '"></td><td class="success"><input type="button" id="ramo4_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo4 + '"></td><td class="success"><input type="button" id="ramo5_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo5 + '"></td><td class="success"><input type="button" id="ramo6_' + i + '" class="btn btn-propio btn-sm" value="' + car.Ramo6 + '"></td>');
        //columna1.append(car.Ramo1);
        //columna1.append('<td>' + car.Ramo2 + '</td>');
    }

    for (i = 1; i <= localStorage.getItem('cantidadSemestre'); i++) {
        document.getElementById("ramo1_" + i).addEventListener('click', function() {
            mandar(this.value);
        });

        document.getElementById('ramo2_' + i).addEventListener('click', function() {
            mandar(this.value);
        });

        document.getElementById('ramo3_' + i).addEventListener('click', function() {
            mandar(this.value);
        });

        document.getElementById('ramo4_' + i).addEventListener('click', function() {
            mandar(this.value);
        });

        document.getElementById('ramo5_' + i).addEventListener('click', function() {
            mandar(this.value);
        });

        document.getElementById('ramo6_' + i).addEventListener('click', function() {
            mandar(this.value);
        });
    }
}
else {
    alert("todavia no ingresas tu malla");
}




function mandar(ramo) {
    //alert(ramo);
    window.location = "./Notas.html?carrera=" + ramo;
}
