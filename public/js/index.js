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
        columna1 = $('#semestre' + i).append('<td class="success"><input type="button" id="ramo1" class="btn btn-success btn-sm" value="' + car.Ramo1 + '"></td><td class="success"><input type="button" id="ramo2" class="btn btn-success btn-sm" value="' + car.Ramo2 + '"></td><td class="success"><input type="button" id="ramo3" class="btn btn-success btn-sm" value="' + car.Ramo3 + '"></td><td class="success"><input type="button" id="ramo4" class="btn btn-success btn-sm" value="' + car.Ramo4 + '"></td><td class="success"><input type="button" id="ramo5" class="btn btn-success btn-sm" value="' + car.Ramo5 + '"></td><td class="success"><input type="button" id="ramo6" class="btn btn-success btn-sm" value="' + car.Ramo6 + '"></td>');
        //columna1.append(car.Ramo1);
        //columna1.append('<td>' + car.Ramo2 + '</td>');
    }

}
else {
    alert("todavia no ingresas tu malla");
}


for (i = 1; i <= 6; i++) {
    var test = document.getElementById('ramo1');
    test.addEventListener('click', function() {
        mandar(test.value);
    });
    var test2 = document.getElementById('ramo2');
    test2.addEventListener('click', function() {
        mandar(test2.value);
    });
    var test3 = document.getElementById('ramo3');
    test3.addEventListener('click', function() {
        mandar(test3.value);
    });
    var test4 = document.getElementById('ramo4');
    test4.addEventListener('click', function() {
        mandar(test4.value);
    });
    var test5 = document.getElementById('ramo5');
    test5.addEventListener('click', function() {
        mandar(test5.value);
    });
    var test6 = document.getElementById('ramo6');
    test6.addEventListener('click', function() {
        mandar(test6.value);
    });
}

function mandar(ramo) {
    //alert(ramo);
    window.location = "./Notas.html?carrera=" + ramo;
}
