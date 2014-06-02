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
        columna1 = $('#semestre' + i).append('<td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo1 + '"></td><td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo2 + '"></td><td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo3 + '"></td><td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo4 + '"></td><td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo5 + '"></td><td class="success"><input type="button" id="ramo" class="btn btn-success btn-sm" value="' + car.Ramo6 + '"></td>');
        //columna1.append(car.Ramo1);
        //columna1.append('<td>' + car.Ramo2 + '</td>');
    }

}
else {
    alert("todavia no ingresas tu malla");
}
var test = document.getElementById('ramo');
test.addEventListener('click', function() {
    mandar();
});

function mandar() {
    window.location = "./Notas.html";
}
